import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSZ2DqmnVaVHHS9zAracbXRhoB76nPrdNVhKotyyqxhjB/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Funni boi",
  description: "idk what this is, i just wacthed a tutorial on how to create frames",
  openGraph: {
    title: "Random MEMES from reddit and no i am not going to give credits",
    description: "idk what this is, i just wacthed a tutorial on how to create frames",
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSZ2DqmnVaVHHS9zAracbXRhoB76nPrdNVhKotyyqxhjB/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
