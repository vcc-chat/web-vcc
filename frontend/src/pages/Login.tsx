
import { TargetedEvent, useCallback, useEffect, useState } from "react"
import { useNavigate, Form } from "react-router-dom"
import classNames from "classnames"
import { useTranslation } from "react-i18next"

import { LoginType } from "../state/login"
import useStore from "../store"
import { useLoginActionData } from "../loaders"
import { useNetwork, useTitle } from "../tools"

export default function Login(props: {}) {
  const username = useStore(state => state.username)
  const changeUsername = useStore(state => state.changeUsername)
  const navigate = useNavigate()
  const loginActionData = useLoginActionData()
  const { makeRequest, errorAlert } = useNetwork()
  const success = useStore(state => state.success)
  const failed = useStore(state => state.failed)
  const startGet = useStore(state => state.startGet)
  const loginStatus = useStore(state => state.type)
  const setToken = useStore(state => state.setToken)
  const { t } = useTranslation()
  useEffect(() => {
    if (loginActionData === undefined) return
    if (loginActionData.success) {
      success()
      setToken(loginActionData.token)
      navigate("/")
    } else {
      errorAlert(t("Operation failed"))
      failed()
    }
  }, [loginActionData])

  useEffect(() => {
    if (loginStatus == LoginType.LOGIN_SUCCESS) {
      navigate("/")
    }
  }, [loginStatus])

  const githubOauthHandler = useCallback(async () => {
    const { usrname: requestID, msg: url } = await makeRequest({
      type: "request_oauth",
      msg: "github"
    })
    window.open(url, "_blank", "noopener,noreferrer")
    const { uid, usrname: username, msg: token } = await makeRequest({
      type: "login_oauth",
      usrname: "github",
      msg: requestID
    })
    setToken(token)
    changeUsername(username)
    success()
    navigate("/")
  }, [makeRequest])

  useTitle("Login")

  return (
    <>
      <div className={classNames("hero min-h-screen bg-base-200", {
        "hidden": loginStatus != LoginType.NOT_LOGIN
      })}>
        <Form method="post" className="hero-content flex-col lg:flex-row-reverse" onSubmit={() => {
          startGet()
        }}>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{t("Login now!")}</h1>
            <p className="py-6">{t("To send messages, you need to login first.")}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{t("Username")}</span>
                </label>
                <input
                  type="text"
                  placeholder={t("Username") ?? undefined}
                  className="input input-bordered"
                  name="username" 
                  value={username}
                  onInput={(ev: TargetedEvent<HTMLInputElement, Event>) => {
                    changeUsername(ev.currentTarget.value)
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{t("Password")}</span>
                </label>
                <input type="password" placeholder={t("Password") ?? undefined} className="input input-bordered" name="password" />
              </div>
              <div className="form-control mt-6 flex space-y-2">
                <div className="flex w-full btn-group">
                  <button className="btn btn-ghost" onClick={() => {
                    navigate("/register")
                    console.log(1)
                  }} type="button">{t("Register")}</button>
                  <button className="flex-1 btn btn-primary" type="submit">{t("Login")}</button>
                </div>
                <button className="btn" onClick={githubOauthHandler} type="button">
                  {t("Continue with Github")}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}