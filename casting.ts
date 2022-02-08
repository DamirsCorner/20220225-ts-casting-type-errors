export interface Button {
  label: string;
  handler: () => void;
}

export interface Dialog {
  message: string;
  buttons: Button[];
}

export interface ExtendedDialog extends Dialog {
  title: string;
}

export function display(dialog: Dialog) {
  console.log(JSON.stringify(dialog));
}
