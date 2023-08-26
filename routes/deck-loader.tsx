import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import i18n, { Language } from "../i18n.ts";
import { FloatingClasses } from "../components/FloatingClasses.tsx";
import { DeckLoaderForm } from "../components/DeckLoaderForm.tsx";

export default function Deck(props: PageProps<unknown, Language>) {
  const { language } = props.state;
  const t = i18n(language);

  return (
    <>
      <Head>
        <title>{t("common.title")}</title>
      </Head>
      <div class="relative z-10">
        <header class="block text-center mt-40 mb-4">
          <h1 class="h-36 font-light text-7xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            {t("loader.title")}
          </h1>
        </header>
        <DeckLoaderForm language={language} />
      </div>
      <FloatingClasses />
    </>
  );
}
