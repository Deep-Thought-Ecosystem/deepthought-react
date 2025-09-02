import styles from "./page.module.css";
import ProviderButton from "../components/ProviderButton";
import {
  GoogleIcon, MicrosoftIcon, AppleIcon, PhoneIcon,
  FacebookIcon, LinkedInIcon, GitHubIcon
} from "../components/icons";

export default function Home() {
  return (
    <main className={styles.shell}>
      <div className={styles.wrap}>
        {/* Email / Password */}
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            autoComplete="email"
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            autoComplete="current-password"
          />
        </div>

        {/* Entrar */}
        <button className={styles.btnPrimary}>
          <span className={styles.primaryIcon}>🔒</span>
          <span>Entrar</span>
        </button>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Providers */}
        <div className={styles.providers}>
          <ProviderButton icon={<GoogleIcon />} originalColor>
            Continuar com o Google
          </ProviderButton>

          <ProviderButton icon={<MicrosoftIcon />} originalColor>
            Continuar com a conta Microsoft
          </ProviderButton>

          <ProviderButton icon={<AppleIcon />}>
            Continuar com a Apple
          </ProviderButton>

          <ProviderButton icon={<PhoneIcon />}>
            Continuar com o telefone
          </ProviderButton>

          <ProviderButton icon={<FacebookIcon />} originalColor>
            Continuar com o Facebook
          </ProviderButton>

          <ProviderButton icon={<LinkedInIcon />} originalColor>
            Continuar com o LinkedIn
          </ProviderButton>

          <ProviderButton icon={<GitHubIcon />}>
            Continuar com o GitHub
          </ProviderButton>
        </div>
      </div>
    </main>
  );
}