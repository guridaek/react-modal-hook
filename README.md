# guridaek-modal-hook

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```sh
npm install guridaek-react-modal-hook
```

## 사용 방법

### useModal 불러오기

```js
import { useModal } from "guridaek-react-modal-hook";
```

### useModal 사용하기

```js
const { modal, isOpen, open, close } = useModal("root", <></>);
```

구현된 모달은 ESC를 누르거나 모달의 바깥을 누르면 닫힙니다.

## parameters

elementID: 모달의 부모가 될 Element의 ID.

children: 모달 내부에 들어갈 컨텐츠.

### 사용 예시

```js
import { useModal } from "guridaek-react-modal-hook";

function App() {
  const { modal, isOpen, open, close } = useModal(
    "root",
    <>
      <h2>제목</h2>
      <p>내용</p>
    </>
  );
  return (
    <div className="App">
      <p onClick={open}>모달 오픈</p>
      {modal}
    </div>
  );
}

export default App;
```
