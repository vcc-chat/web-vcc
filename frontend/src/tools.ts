import { createContext, useContext } from "react"
import { RequestType, Request } from "./config"

import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import { useDispatch, useSelector } from "./store"
import { changeAll } from "./state/chat"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000
    }
  }
})

export const NetworkContext = createContext<{
  ready: boolean,
  makeRequest: ((arg0: Request) => Promise<Request>) | null,
  successAlert: ((msg: string) => void) | null,
  errorAlert: ((msg: string) => void) | null
}>({
  ready: false, 
  makeRequest: null,
  successAlert: null,
  errorAlert: null
})

export function useNetwork() {
  const { ready, makeRequest: makeRequestRaw, successAlert, errorAlert } = useContext(NetworkContext)!
  function makeRequest(request: {
    type: RequestType,
    uid?: number,
    usrname?: string,
    msg?: string
  }) {
    return makeRequestRaw!({
      type: request.type,
      uid: request.uid ?? 0,
      usrname: request.usrname ?? "",
      msg: request.msg ?? "",
      uuid: URL.createObjectURL(new Blob).slice(-36)
    })
  }
  return {
    ready,
    makeRequest,
    successAlert: successAlert!,
    errorAlert: errorAlert!
  }
}

export function stringToColor(str: string) {
  let hash = 0;
  let i;

  for (i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function useChatList() {
  const { makeRequest } = useNetwork()
  const dispatch = useDispatch()
  const { status, data } = useQuery({
    queryKey: ["chat-list"],
    cacheTime: Infinity,
    queryFn: async () => {
      const { msg: msgUntyped } = await makeRequest({
        type: RequestType.CTL_LJOIN
      })
      const data = msgUntyped as unknown as [number, string, number | null][]
      const values = data.map(value => value[0])
      const names = data.map(value => value[1])
      const parentChats = Object.fromEntries(
        data
          .map<[number, number]>(([a, b, c]) => [c ?? -1, a])
          .sort(([a, b], [c, d]) => +(a > c))
          .reduce((a, [b, d]) => (
            a.length ? (
              c => c[0] == b ? (
                a.slice(0, -1).concat([[b, c[1].concat(d)]])
              ) : a.concat([[b, [d]]])
            )(a.at(-1)!) : [[b, [d]]]
          ) as [number, number[]][], [] as [number, number[]][])
          .map<[number, number[]]>(([a, b], i, arr) => (
            a == -1 ? [a, b.filter(a => !arr.map(([a, b]) => a).includes(a))] : [a, b]
          ))
          .reduce((a, b) => [
            ...a, ...(b[0] == -1 ? b[1].map(a => [a, []] as [number, number[]]) : [b])
          ], [] as [number, number[]][])
      )
      dispatch(changeAll([values, names]))
      return {
        values,
        names,
        parentChats
      }
    }
  })
  const queryClient = useQueryClient()
  const values = data?.values ??  []
  const names = data?.names ??  []
  const parentChats = data?.parentChats ?? {}
  return {
    loading: status === "loading",
    values,
    names,
    parentChats,
    refresh() {
      queryClient.invalidateQueries({
        queryKey: ["chat-list"]
      })
    }
  }
}