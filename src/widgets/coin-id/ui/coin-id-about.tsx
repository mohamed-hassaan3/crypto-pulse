import { InfoDataProps } from "@/entities/coins/model/types";
import { ButtonShowMore } from "@/shared/ui";

export const CoinIdAbout = ({ infoData }: { infoData: InfoDataProps }) => {
  return (
    <article>
      {infoData.description.en ? (
        <div className="space-y-2">
          <p className="text-neutral-500 font-extrabold text-xl">
            About {infoData.name}
          </p>
          <p className=" text-sm text-neutral-300 leading-6">
            {infoData.description.en.replace(/<[^>]+>/g, " ").trim()}
            <ButtonShowMore
              text={infoData.description.en.replace(/<[^>]+>/g, " ").trim()}
              limited={100}
            />
          </p>
        </div>
      ) : null}
    </article>
  );
};
