import React, { useState } from "react";
import {
  Button,
  Card,
  ContactForm,
  Head,
  Heading,
  Img,
  MaxContainer,
  QuotationForm,
  SetInnerHtml,
} from "@/components";
import { useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "@/redux/api/serviceApi";
import { useTranslation } from "react-i18next";

const DetailService = () => {
  const { id } = useParams();
  const { data } = useGetServiceByIdQuery(id);
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const currentLang = i18n.language === "ar" ? "ar" : "en";
  return (
    <>
      <Head
        title={data?.data?.seo?.title || "Service | NBTC"}
        description={data?.data?.seo?.metaDescription || ""}
        canonical={data?.data?.seo?.canonicalUrl}
        ogUrl={data?.data?.seo?.ogUrl}
        ogImage={data?.data?.seo?.ogImage}
        keywords={data?.data?.seo?.metaKeywords}
      />
      <MaxContainer className="max-w-[1230px]">
        <div className="flex flex-col gap-5 px-5 py-10 md:gap-8 lg:gap-10 xl:flex-row">
          <div className="flex flex-col-reverse gap-5 md:flex-row xl:w-[60%]">
            <div className="scrollbar-hide flex flex-shrink-0 flex-row gap-4 overflow-x-auto md:flex-col">
              {data?.data?.photos?.map((p) => (
                <Card
                  className="border-red hover:border-t-4"
                  key={p?._id}
                  onClick={() => setSelectedImg(p)}
                >
                  <Img dynamic src={p} className="h-28 w-32 object-contain" />
                </Card>
              ))}
            </div>

            <Card className="max-h-[27rem] max-w-[34rem] flex-shrink-0 md:h-[27rem] md:w-[34rem]">
              <Img
                dynamic
                className="h-full w-full object-contain"
                src={selectedImg || data?.data?.image || ""}
              />
            </Card>
          </div>

          <div className="space-y-1 xl:w-[43%]">
            <Heading variant="big" className="text-left">
              {data?.data?.title?.[currentLang]}
            </Heading>

            <SetInnerHtml text={data?.data?.description?.[currentLang] || ""} />

            <Button
              onClick={() => setShowModal(true)}
              text={t("coreBusiness.request_quote")}
              variant="secondaryOutline"
              className="!my-5 w-full"
            />
          </div>
        </div>

        <QuotationForm
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          department={data?.data?.department}
        />
      </MaxContainer>

      <ContactForm />
    </>
  );
};

export default DetailService;
