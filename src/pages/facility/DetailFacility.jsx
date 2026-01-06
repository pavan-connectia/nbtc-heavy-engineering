import React from "react";
import {
  Head,
  Heading,
  Hero,
  Img,
  MaxContainer,
  SetInnerHtml,
} from "@/components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetFacilityByIdQuery } from "@/redux/api/facilityApi";

const DetailFacility = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { data } = useGetFacilityByIdQuery(id);

  const currentLang = i18n.language === "ar" ? "ar" : "en";

  return (
    <>
      <Head
        title={data?.data?.seo?.title || "Facility | NBTC"}
        description={data?.data?.seo?.metaDescription || "Description"}
        canonical={data?.data?.seo?.canonicalUrl}
        ogUrl={data?.data?.seo?.ogUrl}
        ogImage={data?.data?.seo?.ogImage}
        keywords={data?.dat?.seo?.metaKeywords}
      />
      <Hero
        dynamic
        src={data?.data?.image}
        heading={data?.data?.title?.[currentLang]}
      />

      <MaxContainer className="max-w-[1200px] space-y-3 px-3 py-10 pb-6 sm:py-14">
        <Heading
          variant="big"
          className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl rtl:text-right"
        >
          {data?.data?.title?.[currentLang]}
        </Heading>

        <SetInnerHtml text={data?.data?.description?.[currentLang]} />

        <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:grid-cols-3">
          <Img dynamic src={data?.data?.image} />

          {data?.data?.photos?.map((p) => (
            <Img dynamic src={p} key={p} />
          ))}
        </div>
      </MaxContainer>
    </>
  );
};

export default DetailFacility;
