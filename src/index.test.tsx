// modal.test.tsx
import { render } from "@testing-library/react";
import { Modal } from "index";
import * as React from "react";

describe("Modal component", () => {
  it("should not render the modal when open is false", () => {
    const { queryByText } = render(
      <Modal open={false}>
        <p>Contenu de la modal</p>
      </Modal>
    );

    const modalContent = queryByText("Contenu de la modal");
    expect(modalContent).toBeNull();
  });
});
