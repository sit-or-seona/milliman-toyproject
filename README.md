# Milliman ToyProject

## 해결 과제

**일렉트론 기반의 Side bar 틀 제작**

1️⃣ 초기 화면 구현 <br>
2️⃣ antd의 Collapse를 활용한 카테고리 구현 <br>
3️⃣ material-ui의 TreeView를 활용한 카테고리 내부 구현 <br>
4️⃣ re-resizable의 Resizable을 활용한 카테고리 크기 조절 기능 구현 <br>
5️⃣ _(추가)_ Title bar의 window control 버튼 기능 구현

<br>

## 실행 방법

```
$   git clone https://github.com/sit-or-seona/milliman-toyproject.git
$   npm install
$   npm start
```

<br>

## 개발 환경

- 환경: JavaScript, Node.js(v14.16.0), Electron, React
- 패키지: react, electron, re-resizable, antd, material-ui
- 추가 패키지
  - 일렉트론 관련: electron-is-dev, electron-builder, concurrently, wait-on, cross-env
  - UI 관련: styled-components, styled-reset, material-ui/icon
- 일정 관리: [Notion](https://seonabang.notion.site/Milliman-Toy-Project-85b8982cf89e4f80ba33ceffb234309d)

<br>

## 진행 기간

2023.05.15 - 2023.05.19 (5days)

<br>

## 구현 화면

<div align="center">

|                                                       초기 화면                                                        |
| :--------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/sit-or-seona/milliman-toyproject/assets/106213724/804efcfb-675c-4f54-8c49-836277c533e4"/> |

|                                        Side bar의 Collpase와 TreeView 구현 화면                                         |
| :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/sit-or-seona/milliman-toyproject/assets/106213724/7ab15f25-26bd-4347-8e0e-7e2498779752" /> |

|                                           마우스로 드래그 하여 Resize한 화면                                            |
| :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/sit-or-seona/milliman-toyproject/assets/106213724/ac8d6a9c-e818-490a-bb9e-257a3d26c067" /> |

</div>

<br>

## 커밋 컨벤션

```
#   feat      : 새로운 기능 추가
#   fix       : 버그 수정
#   design    : CSS 등 사용자 UI 디자인 추가 및 수정
#   refactor  : 리팩토링
#   style     : 비즈니스 로직과 연관 없는 코드 형식 수정
#   docs      : 문서 추가, 수정, 삭제
#   chore     : 환경설정 및 기타 변경사항
#   rename    : 파일 혹은 폴더명을 수정하거나 이동
#   remove    : 파일 삭제
```

<br>

## 폴더 구조

```
├── 📁 src
│   ├── App.js
│   ├── index.js
│   ├── 📁 components
│   │   ├── 📁 SideBar
│   │   │   ├── 📁 Resizer
│   │   │   │   └── index.jsx
│   │   │   ├── 📁 TreeView
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.js
│   │   │   ├── index.jsx
│   │   │   ├── style.js
│   │   │   └── categoryData.js
│   │   └── 📁 TitleBar
│   │   │   ├── 📁 TitleBarButton
│   │   │   │   └── index.jsx
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   └── 📁 styles
│       ├── globalStyles.jsx
│       └── theme.jsx
...
```

<br>

## 추가 작업 예정 사항

- [ ] Category 1 크기를 최대로 키울시 Category 2가 화면 밖으로 벗어나는 현상 해결
- [ ] 브라우저에서 실행시 발생하는 `window.require is not a function` 에러 해결
- [ ] Side bar 너비 조절 기능 구현

<br>
