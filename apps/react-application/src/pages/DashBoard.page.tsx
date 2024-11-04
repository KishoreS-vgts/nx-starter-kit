import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function DashBoard() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col justify-center items-center h-full text-2xl">
      {t('Welcome to React')}
      <Trans i18nKey="adminDashboard">
        <p>
          This is <strong>admin's</strong> dashboard
        </p>
      </Trans>
      <Link to="/admin/profile">Go to profile</Link>
    </div>
  )
}
