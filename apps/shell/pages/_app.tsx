import { HostProvider, createRuntime } from "@micro-observability/runtime-react";
import { GlobalStyle } from '../components/GlobalStyles';

const runtime = createRuntime();

export default function MyApp({ Component, pageProps }) {
  return (
    <HostProvider origin="http://localhost:33000" runtime={runtime}>
      <GlobalStyle />
      <Component {...pageProps} />
    </HostProvider>
  );
}
