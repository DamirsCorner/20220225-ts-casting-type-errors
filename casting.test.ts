import { ExtendedDialog, display } from "./casting";

it("detects type error in base type", () => {
  display({
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: "error" },
      { label: "No", handler: () => {} },
    ],
  });
});

it("detects type error in extended type when passed as base type", () => {
  display({
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: "error" },
      { label: "No", handler: () => {} },
    ],
    title: "Question",
  });
});

it("does not detect type error in extended type when type casting", () => {
  display({
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: "error" },
      { label: "No", handler: () => {} },
    ],
    title: "Question",
  } as ExtendedDialog);
});

it("does not detect missing properties in extended type when type casting", () => {
  display({
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: () => {} },
      { label: "No", handler: () => {} },
    ],
  } as ExtendedDialog);
});

it("detects some type errors in extended type when type casting", () => {
  display({
    message: 42,
    buttons: [
      { label: "Yes", handler: () => {} },
      { label: "No", handler: () => {} },
    ],
    title: "Question",
  } as ExtendedDialog);
});

it("detects type error in extended type", () => {
  const dialog: ExtendedDialog = {
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: "error" },
      { label: "No", handler: () => {} },
    ],
    title: "Question",
  };
  display(dialog);
});

it("detects missing properties in extended type when type casting", () => {
  const dialog: ExtendedDialog = {
    message: "Do you agree?",
    buttons: [
      { label: "Yes", handler: () => {} },
      { label: "No", handler: () => {} },
    ],
  };
  display(dialog);
});
