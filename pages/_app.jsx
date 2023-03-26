import "@/styles/globals.css";
import  { AppProps } from "next/app";
//css styles

// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/theme.css";
import "../styles/main.css";
import "../styles/globals.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
const mumbaiChain = {
  id: 80001,
  name: "  Mumbai ",
  network: "Mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://rpc-mumbai.maticvigil.com",
    public: "https://rpc-mumbai.maticvigil.com",
  },
  blockExplorers: {
    default: {
      name: "MATIC",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
};
const { chains, provider, webSocketProvider } = configureChains(
  [mumbaiChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== mumbaiChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: " NFT Marketplace",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  webSocketProvider,

  provider,
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  //bootstrap
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
