import type { RequestType, RequestWithTime } from "./config"
import store from "./store"
import { responseToChatList } from "./tools"

async function makeRequest(request: {
  type: RequestType
  uid?: number | undefined
  usrname?: string | undefined
  msg?: string | undefined
}) {
  return await store.getState().makeRequest(request)
}

const rpc = {
  chat: {
    async quit(chat: number) {
      return !!(
        await makeRequest({
          type: "chat_quit",
          uid: chat
        })
      ).uid
    },
    async kick(chat: number, user: number) {
      return !!(
        await makeRequest({
          type: "chat_kick",
          uid: chat,
          msg: user as any
        })
      ).uid
    },
    async rename(chat: number, name: string) {
      return !!(
        await makeRequest({
          type: "chat_rename",
          uid: chat,
          msg: name
        })
      ).uid
    },
    async modifyUserPermission(chat: number, modifiedUser: number, name: string, value: boolean) {
      return !!(await makeRequest({
        type: "chat_modify_user_permission",
        msg: {
          chat_id: chat,
          modified_user_id: modifiedUser,
          name,
          value
        } as any
      }))
    },
    async modifyPermission(chat: number, name: string, value: boolean) {
      return !!(
        await makeRequest({
          type: "chat_modify_permission",
          uid: chat,
          usrname: name,
          msg: value as any
        })
      ).uid
    },
    async join(chat: number) {
      return !!(
        await makeRequest({
          type: "chat_join",
          uid: chat
        })
      ).uid
    },
    async getUsers(chat: number) {
      return (
        await makeRequest({
          type: "chat_get_users",
          uid: chat
        })
      ).msg as unknown as [number, string][]
    },
    async getAllPermission(chat: number) {
      return (
        await makeRequest({
          type: "chat_get_all_permission",
          uid: chat!,
          usrname: "",
          msg: ""
        })
      ).msg as unknown as Record<number, Record<string, boolean>>
    },
    async getPermission(chat: number) {
      return (
        await makeRequest({
          type: "chat_get_permission",
          uid: chat,
          usrname: "",
          msg: ""
        })
      ).msg as unknown as Record<string, boolean>
    },
    async changeNickname(chat: number, user: number, newName: string) {
      return !!(
        await makeRequest({
          msg: chat as unknown as string,
          uid: user,
          usrname: newName,
          type: "chat_change_nickname"
        })
      ).uid
    },
    async create(name: string, parent: number | null = null) {
      return (
        await makeRequest({
          type: "chat_create",
          usrname: name,
          uid: parent!
        })
      ).uid
    },
    async invite(token: string) {
      return (
        await makeRequest({
          type: "chat_invite",
          msg: token
        })
      ).uid
    },
    async checkInvite(token: string) {
      const { uid: inviter, msg: chat } = await makeRequest({
        type: "chat_check_invite",
        msg: token
      })
      return { inviter, chat: chat as unknown as number }
    },
    async getInviteLink(chat: number) {
      return `/chats/invite/?token=${
        (
          await makeRequest({
            type: "chat_generate_invite",
            uid: chat
          })
        ).msg
      }`
    },
    async list() {
      const { msg: msgUntyped } = await makeRequest({
        type: "chat_list"
      })
      const data = msgUntyped as unknown as [number, string, number | null][]
      const { values, names, parentChats } = responseToChatList(data)
      return {
        values,
        names,
        parentChats
      }
    },
    async getNickname(chat: number, user: number) {
      return (
        await makeRequest({
          type: "chat_get_nickname",
          uid: user,
          usrname: chat as unknown as string
        })
      ).usrname
    }
  },
  session: {
    async join(name: string, parent: number) {
      return !!(
        await makeRequest({
          type: "session_join",
          uid: parent,
          msg: name
        })
      ).uid
    }
  },
  user: {
    async login(username: string, password: string) {
      const { uid, msg: token } = await makeRequest({
        uid: 0,
        type: "login",
        usrname: username,
        msg: password
      })
      return { success: !!uid, token } as { success: true; token: string } | { success: false; token: null }
    },
    async register(username: string, password: string) {
      return !!(
        await makeRequest({
          uid: 0,
          type: "register",
          usrname: username,
          msg: password
        })
      ).uid
    },
    async isOnline(users: number[]) {
      return (
        await makeRequest({
          type: "is_online",
          msg: users as any
        })
      ).msg as unknown as boolean[]
    },
    async tokenLogin(token: string) {
      const { uid, usrname: username } = await makeRequest({
        type: "token_login",
        uid: 0,
        usrname: "",
        msg: token
      })
      return { success: uid != null, username }
    }
  },
  oauth: {
    async request() {
      const { usrname: requestID, msg: url } = await makeRequest({
        type: "request_oauth",
        msg: "github"
      })
      return { requestID, url }
    },
    async login(requestID: string) {
      const { usrname: username, msg: token } = await makeRequest({
        type: "login_oauth",
        usrname: "github",
        msg: requestID
      })
      return { username, token }
    }
  },
  file: {
    async upload(file: File) {
      const { usrname: id, msg: url } = await makeRequest({
        type: "file_upload",
        msg: file.name
      })
      const { ok } = await fetch(url, {
        method: "PUT",
        body: file
      })
      return {
        ok,
        id,
        url
      }
    },
    async download(id: string) {
      const { usrname: name, msg: url } = await makeRequest({
        type: "file_download",
        msg: id
      })
      return { name, url }
    }
  },
  record: {
    async query(chat: number, lastMessageTime: number) {
      const { msg } = await makeRequest({
        uid: chat,
        msg: lastMessageTime as any,
        type: "record_query"
      })
      return (msg as unknown as string[]).map<RequestWithTime>((dataString, index) => {
        const data = JSON.parse(dataString)
        return {
          req: {
            msg: data.msg,
            usrname: data.username,
            uid: data.chat,
            type: "message"
          },
          // need to be changed
          time: Date.now() + index
        }
      })
    }
  },
  push: {
    async getVapidPublicKey() {
      return (
        await makeRequest({
          type: "push_get_vapid_public_key"
        })
      ).msg
    },
    async register(subscription: PushSubscriptionJSON) {
      await makeRequest({
        type: "push_register",
        msg: subscription as any
      })
    }
  }
} as const

export default rpc