import * as React from "react";
import { Toaster } from "react-hot-toast";
import { Footer, Header } from "../components";
import { Helmet } from "react-helmet";
import Icon from "../images/icon.png";
import { RehydrationContext } from "./storeProvider";

type MainLayoutProps = {
  landing?: boolean; // different behaviour on landing page
  children?: JSX.Element | string;
  // metadata
  title?: string;
  titleTwitter?: string;
  description?: string;
  image?: string;
};

export const MainLayout = (props: MainLayoutProps) => {
  const isRehydrated = React.useContext(RehydrationContext);
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@spacebudzNFT" />
        <meta name="twitter:title" content={props.titleTwitter} />
        <meta name="twitter:description" content={props.description} />
        <meta
          name="twitter:image"
          content={props.image ? props.image : `https://spacebudz.io${Icon}`}
        />
      </Helmet>
      {isRehydrated ? (
        <div className="w-full">
          <div
            className={`${
              props.landing ? "text-white" : "text-black"
            } min-h-screen w-full h-full flex flex-col`}
          >
            <Header landing={props.landing} />
            <div className={`${props.landing ? "h-0" : "h-24 md:h-32"}`} />
            {props.children}
          </div>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      ) : null}
    </>
  );
};

MainLayout.defaultProps = {
  title: "SpaceBudz",
  titleTwitter: "SpaceBudz",
  description: "Let's go on an adventure, where will your SpaceBudz take you?",
};
