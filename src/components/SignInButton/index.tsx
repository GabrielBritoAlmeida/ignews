import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button
      onClick={() => signOut()}
      type="button"
      className={styles.signButton}
    >
      <FaGithub color="#04d361" className={styles.closeIcon} />
      {session.user.name} <FiX color="#737380" />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      type="button"
      className={styles.signButton}
    >
      <FaGithub color="#eba417" /> Sign in with Github
    </button>
  )
}
