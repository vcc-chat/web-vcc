import { memo } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import useStore from "../store"
import { useSettingsInfoLoaderData } from "../loaders"

export default memo(function SettingsInfo(props: {}) {
  const chat = useStore(state => state.chat)
  const chatName = useStore(state => state.chatName)
  const { t } = useTranslation()

  const { inviteLink } = useSettingsInfoLoaderData()

  return (
    <>
      <div className="mb-2 text-lg">{t("Name")}: {chatName}</div>
      <div className="mb-2 text-lg">ID: {chat}</div>
      {inviteLink != null && (
        <div className="mb-2 text-lg">{t("Invite Link")}:&nbsp;
          <Link className="link break-all" to={inviteLink}>{location.origin}{inviteLink}</Link>
        </div>
      )}
    </>
  )
})
