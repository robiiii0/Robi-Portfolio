import { components } from "@/components/modules";

export default function Website() {
  return (
    <>
      <components.HomePage />
      <components.Skills />
      <components.Biographie />
      <components.Jobs />
        <components.Stats />
        <components.Companies />

      <components.Contact />
    </>
  );
}
