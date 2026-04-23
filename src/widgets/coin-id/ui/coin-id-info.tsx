import { InfoDataProps } from "@/entities/coins/model/types";

export const CoinIdInfo = ({ infoData }: { infoData: InfoDataProps }) => {
  console.log("INFO", infoData);
  return <div className="h-screen">coin-id-info</div>;
};
