# superstarmodal

A simple modal component for React with Tailwind CSS.

## Installation

Install the package using npm or yarn:

```bash
npm install superstarmodal
```

## Usage

Import the Modal component and use it in your React project:

```bash
import { Modal } from 'superstarmodal';

const MyComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      {/* ... Other content ... */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Modal open={modalOpen}>
        {/* Content of your modal */}
        <p>This is a modal!</p>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};
```

## Props

```bash
The Modal component accepts the following props:

 - open: A boolean value indicating whether the modal should be displayed (true) or hidden (false).
 - children: The content to be displayed inside the modal. This can include any React elements or components.
```

## Exemple Usage

1.Set the open prop to true to display the modal.

2.Provide the desired content within the children prop (e.g., text, buttons, forms).

```bash
<Modal open={modalOpen}>
  <p>This is a modal!</p>
  <button onClick={() => setModalOpen(false)}>Close</button>
</Modal>
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
Customize the content as needed for your specific package.
