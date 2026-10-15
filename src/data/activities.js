import aprilImage from "../assets/cardnews/april.webp";
import juneImage from "../assets/cardnews/june.webp";
import mayImage from "../assets/cardnews/may.webp";
import groupImage from "../assets/cardnews/group.webp";
import october1Image from "../assets/cardnews/october1.png";
import october2Image from "../assets/cardnews/october2.png";

export const activities = [
  {
    month: "04",
    label: "4월 활동",
    date: "2026.04.29",
    title: "산업체 인사 진로 탐색 특강",
    newsTitle: "데이터로 산업 현장을 읽는 진로 탐색 프로그램이 열렸다",
    programName: "산업체 인사 진로 탐색 특강",
    kicker: "Palantir 플랫폼과 데이터 기반 의사결정",
    photo: {
      src: aprilImage,
      alt: "산업체 특강과 데이터 플랫폼 학습을 상징하는 회의 장면",
    },
    summary:
      "4월 29일, 팔란티어 플랫폼의 실제 활용 사례를 중심으로 데이터가 산업 현장의 의사결정에 어떻게 연결되는지 살펴보는 진로 탐색 특강이 진행됐다.",
    points: [
      {
        title: "팔란티어 플랫폼 이해",
        body: "방위산업의 전황 판단, 제조업의 생산 일정 재수립, 의료 분야의 환자 회복 데이터 분석 등 다양한 산업 사례를 통해 데이터 플랫폼의 역할을 확인했다.",
      },
      {
        title: "핵심 기술 온톨로지",
        body: "데이터 간 관계를 정의하고 구조화한 지식 지도를 인공지능과 대형 언어모델이 읽기 좋은 형태로 연결하는 구조를 학습했다.",
      },
      {
        title: "디지털 트윈 적용",
        body: "원유 생산처럼 변수가 많은 환경에서 디지털 공간을 활용해 실시간 최적 조건을 찾아내는 기술의 필요성을 이해했다.",
      },
    ],
    quote:
      "인공지능은 목적이 아니라 수단이다. 기술보다 먼저 문제를 정의하는 태도가 중요하다는 메시지가 남았다.",
    palette: "blue",
  },
  {
    month: "05",
    label: "5월 활동",
    date: "2026.05",
    title: "홈페이지 피드백 및 숏폼 공모전 준비",
    newsTitle:
      "학생 참여를 높이는 홈페이지 개선과 AIHub 활용 프로그램이 추진됐다",
    programName: "홈페이지 개선 피드백 및 연암AIHub 숏폼 공모전 준비",
    kicker: "학생 관점의 서비스 개선과 AI 콘텐츠 제작",
    photo: {
      src: mayImage,
      alt: "노트북으로 홈페이지와 AI 서비스를 살펴보는 장면",
    },
    link: {
      href: "https://yc-ac.factchat.bot/dashboard/chat/39896",
      label: "연암AIHub 바로가기",
    },
    summary:
      "5월에는 학생들이 더 쉽게 프로그램을 찾고 신청할 수 있도록 홈페이지 개선 의견을 정리하고, 연암AIHub를 활용한 숏폼 공모전 준비 활동이 함께 진행됐다.",
    points: [
      {
        title: "UI/UX 개선 제안",
        body: "메인 화면에 신청 가능한 프로그램을 카드 형태로 배치하고, 학과별 참여 가능 프로그램을 필터링할 수 있는 기능의 필요성을 제안했다.",
      },
      {
        title: "FAQ 실효성 강화",
        body: "신청 대상, 신청 방법, 취소 규정, 마일리지, 수료증, 문의처 등 학생들이 실제로 궁금해하는 정보를 중심으로 FAQ를 구성할 것을 건의했다.",
      },
      {
        title: "AIHub 기능 실습",
        body: "늘어난 5000토큰 한도를 활용해 아이디어 정리, 대본 구성, 내용 수정, 홍보 이미지와 발표 자료 제작까지 AI 기반 제작 흐름을 실습했다.",
      },
    ],
    quote:
      "연암AIHub의 API와 에이전트 기능은 전공 프로젝트와 과제에 직접 연결할 수 있는 실용적인 학습 프로그램으로 보였다.",
    palette: "green",
  },
  {
    month: "06",
    label: "6월 활동",
    date: "2026.06.24",
    title: "AI 시대에 변화하는 개발환경과 개발자의 역할 특강",
    newsTitle: "AI 에이전트 시대, 개발자의 역할 변화를 짚는 특강이 진행됐다",
    programName: "AI 시대 개발환경과 개발자 역할 특강",
    kicker: "Agentic AI와 개발자 역량의 변화",
    photo: {
      src: juneImage,
      alt: "AI와 개발 환경 변화를 상징하는 회로와 기술 이미지",
    },
    summary:
      "6월 24일 특강에서는 스스로 목표를 설정하고 업무를 수행하는 에이전틱 AI의 등장과 함께 개발자에게 요구되는 역량이 어떻게 달라지는지 다뤘다.",
    points: [
      {
        title: "에이전틱 AI의 대두",
        body: "날씨, 예산, 구매 이력 등을 종합해 의사결정을 돕는 AI 쇼핑 에이전트 사례를 통해 산업 현장의 자동화 흐름을 접했다.",
      },
      {
        title: "SaaS Apocalypse 이해",
        body: "AI 에이전트가 사람의 업무를 대신 처리하면서 사용자 수 기반 라이선스 모델이 흔들릴 수 있다는 비즈니스 생태계 변화를 학습했다.",
      },
      {
        title: "개발자 채용 시장 변화",
        body: "앞으로의 개발자는 단순 코딩 능력보다 고객의 요구사항을 분석하고 실제 문제를 해결하는 역량이 중요해진다는 점을 확인했다.",
      },
    ],
    quote:
      "AI를 도구로 쓰는 수준을 넘어 새로운 서비스와 시스템을 직접 설계하는 역량이 미래의 핵심임을 실감했다.",
    palette: "coral",
  },
  {
    month: "09",
    label: "9월 활동",
    date: "2026.09",
    title: "스마트SW학과 그룹멘토링 활동 준비",
    newsTitle: "선후배가 함께 배우는 그룹멘토링, 9월 학습 계획을 세웠다",
    programName: "2026학년도 2학기 스마트SW학과 그룹멘토링",
    kicker: "토익 학습을 중심으로 한 선후배 협동학습",
    applicationGuide:
      "뉴칼라인재양성 시스템 접속 → 비교과 프로그램 → 학과 선택",
    photo: {
      src: groupImage,
      alt: "2026학년도 2학기 스마트SW학과 그룹멘토링 프로그램 안내 포스터",
      caption: "스마트SW학과 그룹멘토링 안내 포스터",
      type: "poster",
    },
    summary:
      "9월에는 스마트SW학과 그룹멘토링 참여를 위해 프로그램 운영 방식을 확인하고, 팀원과 함께 실천할 토익 학습 계획을 준비했다. 선후배가 서로 설명하고 배움을 나누며 꾸준히 성장하는 활동을 목표로 한다.",
    points: [
      {
        title: "함께하는 학습",
        body: "멘토 1명과 멘티 3~6명이 팀을 이루어 학기 중 주 4시간씩 협동학습을 진행하는 프로그램이다.",
      },
      {
        title: "영역별 토익 학습 계획",
        body: "각자의 목표와 부족한 영역을 살펴 단어·문법·LC·RC를 나누어 공부하고, 틀린 문제의 원인을 서로 설명할 계획이다.",
      },
      {
        title: "기록하며 성장하기",
        body: "매주 학습 내용과 진행 상황을 기록하고, 모의 토익으로 변화를 확인해 다음 학습 계획에 반영할 예정이다.",
      },
    ],
    quote: "함께 목표를 세우고 꾸준히 실천하며, 서로의 배움을 더해 갑니다.",
    palette: "blue",
  },
  {
    month: "10",
    label: "10월 활동",
    date: "2026.10",
    title: "AI 카드뉴스 공모전 제작",
    newsTitle: "AI로 펼친 두 가지 이야기, 카드뉴스로 전하는 캠퍼스의 성장",
    programName:
      "AI 크리에이티브 챌린지 · 혁신으로 성장한 나의 캠퍼스 스토리 공모전",
    kicker: "아이디어부터 디자인까지, AI와 함께 만든 두 편의 카드뉴스",
    photo: {
      src: october1Image,
      alt: "AI 크리에이티브 챌린지 공모전 안내 포스터",
    },
    posters: [
      {
        src: october1Image,
        alt: "AI 크리에이티브 챌린지 공모전 안내 포스터",
        title: "AI 크리에이티브 챌린지",
        description:
          "AI 창작·학습·스토리텔링을 바탕으로, 익숙한 AI 활용 경험을 한눈에 읽히는 카드뉴스로 풀어냈습니다.",
      },
      {
        src: october2Image,
        alt: "혁신으로 성장한 나의 캠퍼스 스토리 공모전 안내 포스터",
        title: "혁신으로 성장한 나의 캠퍼스 스토리",
        description:
          "혁신지원사업과 비교과 활동을 통해 얻은 경험과 변화를 학생의 시선으로 전하는 카드뉴스를 제작했습니다.",
      },
    ],
    summary:
      "10월에는 두 공모전의 주제에 맞춰 AI를 활용한 카드뉴스를 제작했습니다. 하나는 AI를 배우고 활용한 경험을, 다른 하나는 캠퍼스에서의 배움과 성장을 담았습니다.",
    points: [
      {
        title: "아이디어를 이야기로",
        body: "AI로 여러 아이디어를 탐색하고 공모전의 취지에 맞는 주제를 골라 각 카드의 흐름을 기획했습니다.",
      },
      {
        title: "핵심만 쉽고 선명하게",
        body: "긴 내용을 짧은 문장으로 다듬고 이미지·색상·글자 배치를 조정해 읽기 편한 카드뉴스로 만들었습니다.",
      },
      {
        title: "AI에 나의 검토를 더해",
        body: "AI가 만든 문구와 이미지를 그대로 쓰지 않고 직접 확인·수정하며 전달력과 완성도를 높였습니다.",
      },
    ],
    quote:
      "AI로 시작한 아이디어에 나의 경험과 검토를 더해, 캠퍼스의 이야기를 더 쉽고 생생하게 전합니다.",
    palette: "coral",
  },
];
