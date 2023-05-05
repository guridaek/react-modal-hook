# guridaek-modal-hook

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```sh
npm install guridaek-react-modal-hook
```

## 사용 방법

### Modal, useModal 불러오기

```ts
import { Modal, useModal } from "guridaek-react-modal-hook";
```

### Modal, useModal 사용하기

```ts
const { isModalOpen, openModal, closeModal } = useModal();

...

<Modal elementID={"modal"} closeModal={closeModal}>
  <>모달의 내용</>
</Modal>;

```

구현된 모달은 ESC를 누르거나 모달의 바깥을 누르면 닫힙니다.

## props

- elementID: 모달을 렌더링할 DOM Element ID.

- children: 모달 내부에 들어갈 컨텐츠. (ReactNode)

- closeModal: 모달을 닫기 위한 함수. `useModal`에 구현되어 있습니다.

### 사용 예시

```ts
import { Modal, useModal } from "guridaek-react-modal-hook";

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section>
      <button onclick={openModal}>모달 열기</button>

      {isModalOpen ? (
        <Modal elementID={"modal"} closeModal={closeModal}>
          <div>
            <h2>제목</h2>
            <p>내용</p>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

export default App;
```
