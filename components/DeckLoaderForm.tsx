import i18n from "../i18n.ts";

interface DeckLoaderFormProps {
  language: string | null;
}

export function DeckLoaderForm(props: DeckLoaderFormProps) {
  const t = i18n(props.language);

  return (
    <section class="p-4 mx-auto max-w-screen-md h-full flex justify-center items-center flex-col">
      <div class="w-full h-14 inline-flex">
        <input
          name="deckId"
          type="number"
          class="placeholder-shown:italic w-2/3 p-2.5 rounded-lg text-lg text-gray-500 border-indigo-300 border-2"
          placeholder={`${t("common.eg")} 2915442`}
        />
        <button class="w-1/3 ml-1 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-2xl bg-purple-700 text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
          {t("loader.button")}
        </button>
      </div>
    </section>
  );
}
