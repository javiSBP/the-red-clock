import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import i18n, { Language } from "../i18n.ts";
import { FloatingClasses } from "../components/FloatingClasses.tsx";

export default function Deck(props: PageProps<unknown, Language>) {
  const t = i18n(props.state.language);

  return (
    <>
      <Head>
        <title>{t("common.title")}</title>
      </Head>
      <header class="block text-center mt-40 mb-4">
        <h1 class="h-36 font-light text-6xl bg-gradient-to-r text-gray-300">
          {t("loader.title")}
        </h1>
      </header>
      <section class="p-4 mx-auto max-w-screen-md h-full flex justify-center items-center flex-col">
        <div class="w-full h-14 inline-flex">
          <input
            type="number"
            class="placeholder-shown:italic w-2/3 p-2.5 rounded-lg text-lg text-gray-500"
            placeholder={`${t("common.eg")} 2915442`}
          />
          <button class="w-1/3 ml-1 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
            {t("loader.button")}
          </button>
        </div>
      </section>
      <FloatingClasses></FloatingClasses>
    </>
  );
}
