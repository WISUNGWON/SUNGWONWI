import React, { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import {
  Typography,
  Margin,
  Row,
  Photo,
  Span,
  Column,
} from 'presentation/components';
import {
  likelion,
  ssafy,
  bookcovery,
  bookcoveryKeyword,
  bookcoveryKeywordModal,
  Logo30cos,
} from 'resources/images';
import { github, arrowUp, home, bookcoveryLogo } from 'resources/icons';
import { positionState } from 'presentation/recoil';
import * as S from './styles/index';
import { Languages, languages } from '../../../Locales/i18n';

export const MainPage: React.FC = () => {
  const [position, setPosition] = useRecoilState<number>(positionState);
  const onScroll = () => {
    setPosition(window.scrollY);
  };

  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = useMemo(
    () => i18n.language || window.localStorage.i18nextLng || '',
    [i18n.language],
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.TopButton onClick={() => window.scrollTo(0, 0)}>
        <img src={arrowUp} alt="arrowUp" />
      </S.TopButton>
      <Column>
        <Typography size={70} bold color="blue50">
          <Span size={70} bold color="white">
            WI
          </Span>{' '}
          SUGN WON
        </Typography>
        <Row>
          {languages.map((lang) => (
            <React.Fragment key={lang}>
              <S.LanguageBtn
                type="button"
                onClick={() => handleChangeLanguage(lang)}
                point={lang === currentLanguage}
              >
                {t(`language_${lang}`)}
              </S.LanguageBtn>
              <Margin row size={8} />
            </React.Fragment>
          ))}
        </Row>
      </Column>
      <Margin size={48} />
      <Typography size={20} medium color="blue30">
        <span role="img" aria-label="img">
          🍰
        </span>{' '}
        1994.11.07
      </Typography>
      <Typography size={20} medium color="blue30">
        <span role="img" aria-label="img">
          📧
        </span>{' '}
        tkrhkaos12@naver.com
      </Typography>
      <Margin size={30} />
      <Typography size={20} medium color="white">
        {t('hello')}
      </Typography>
      <Margin size={30} />
      <Typography size={20} medium color="white">
        {t('knowMe')}
        <span role="img" aria-label="img">
          😀
        </span>
      </Typography>
      <Margin size={25} />
      <Row>
        <S.LogIcon
          src={github}
          alt="github"
          size={48}
          onClick={() => window.open('https://github.com/WISUNGWON')}
        />
        <Margin row size={20} />
        <S.LogIcon
          src={home}
          alt="home"
          size={48}
          onClick={() => window.open('https://norwayy.tistory.com/')}
        />
      </Row>
      <Margin size={420} />
      {/* 하나의 섹션 */}
      <S.Divider />
      <Margin size={50} />
      <Typography size={50} bold color="white">
        <span role="img" aria-label="img">
          💻
        </span>{' '}
        EXPERIENCE
      </Typography>
      {/* 30COS */}
      <Margin size={70} />
      <Row justify="space-between" align="center">
        <Row align="center">
          <Typography size={30} bold color="white">
            30COS
          </Typography>
          <S.LogoIcon
            src={Logo30cos}
            alt="30cosLOGO"
            onClick={() => window.open('https://30cos.com/')}
          />
        </Row>
        <Typography size={20} bold color="blue50">
          2021.07 ~ present
        </Typography>
        <Margin row size={100} />
      </Row>
      <Typography size={20} regular color="blue30">
        웹 서비스, 어드민 프론트엔드 개발 (React ,Typescript)
      </Typography>
      <Margin size={30} />
      <Typography size={16} medium color="white">
        화장품 인증 자동화 솔루션 30COS 웹, 어드민 프론트엔드 개발 및 유지보수
        <br />
      </Typography>
      <Margin size={15} />
      <Typography size={16} regular color="blue30">
        주요 업무 내용
      </Typography>
      <Typography size={16} regular color="white">
        - ReactJS, Typescript 웹 어플리케이션 제작 <br />
        - 원료사 버전 런칭, 제조사 / 브랜드사 버전 고도화 <br />
        - 기술스택: ReactJS, Typescript, ant-design, react-query, redux,
        Styled-component, Git-flow
        <br />
      </Typography>
      <Margin size={30} />
      {/* <Typography size={16} regular color="blue50">
        * 이미지를 클릭하시면, 크게 보실 수 있습니다.
      </Typography>
      <Margin size={30} /> */}
      {/* Todo: 클릭하면 모달 창나오고 크게 보기, 이미지가 여러개면 1/2 이런식으로 나올 수 있게 그리고 오른쪽 버튼 있게하기 */}
      {/* SSAFY */}
      <Margin size={100} />
      <Row justify="space-between" align="center">
        <Typography size={30} bold color="white">
          삼성 청년 소프트웨어 아카데미 4기 (SSAFY)
        </Typography>
        <Typography size={20} bold color="blue50">
          2020.07 ~ 2021.03
        </Typography>
        <Margin row size={100} />
      </Row>
      <Typography size={20} regular color="blue30">
        교육 이수 (웹 개발, 알고리즘)
      </Typography>
      <Margin size={30} />
      <Typography size={16} medium color="white">
        삼성과 고용노동부에서 주관하는 소프트웨어 교육기관에서 <br />
        Java 웹 풀스택 및 알고리즘 교육과정을 수강했습니다. <br />
        백엔드와 프론트엔드 개발을 강의와 프로젝트를 통해 웹 개발의 전반적인
        과정을 공부할 수 있었습니다.
        <br />
        아카데미에서의 경험을 통해 제가 좋아하는 프론트 개발자로서의 길을 선택할
        수 있었습니다.
      </Typography>
      <Margin size={30} />
      <Typography size={16} regular color="blue30">
        주요 교육 내용
      </Typography>
      <Typography size={16} regular color="white">
        - JSP, Servlet, Spring 백엔드 강의 수강
        <br />
        - Javascript, CSS/HTML, VueJS 강의 수강 <br />
        - Problem Solving with Java
        <br />
      </Typography>
      <Margin size={20} />
      <Typography size={16} regular color="blue50">
        * 이미지를 클릭하시면, 크게 보실 수 있습니다.
      </Typography>
      <Margin size={30} />
      {/* Todo: 클릭하면 모달 창나오고 크게 보기, 이미지가 여러개면 1/2 이런식으로 나올 수 있게 그리고 오른쪽 버튼 있게하기 */}
      <Photo width={300} height={300} src={ssafy} alt="ssafy" />
      {/* 멋쟁이 사자처럼 */}
      <Margin size={100} />
      <Row justify="space-between" align="center">
        <Typography size={30} bold color="white">
          멋쟁이 사자처럼 8기
        </Typography>
        <Typography size={20} bold color="blue50">
          2020.03 ~ 2020.08
        </Typography>
        <Margin row size={100} />
      </Row>
      <Typography size={20} regular color="blue30">
        교육 이수 (웹 개발)
      </Typography>
      <Margin size={30} />
      <Typography size={16} medium color="white">
        대학생 코딩 대외활동인 멋쟁이 사자처럼 한양대 지부에서 8기로
        참여했습니다. <br />
        개발을 시작한지 얼마되지 않았지만 열정은 넘쳤을 때, 실력있는 동문들을
        만날 수 있어서 많은 동기부여가 됐습니다.
        <br />
        웹 개발자로서 개발의 방향을 정할 수 있었고, 같이 활동했던 동기들과의
        추억은 제일 값진 경험이었습니다.
        <br />
      </Typography>
      <Margin size={30} />
      <Typography size={16} regular color="blue30">
        주요 교육 내용
      </Typography>
      <Typography size={16} regular color="white">
        - React, Django 강의 수강
        <br />
        - 아이디어 해커톤 및 웹 프로젝트 진행
        <br />
      </Typography>
      <Margin size={20} />
      <Typography size={16} regular color="blue50">
        * 이미지를 클릭하시면, 크게 보실 수 있습니다.
      </Typography>
      <Margin size={30} />
      {/* Todo: 클릭하면 모달 창나오고 크게 보기, 이미지가 여러개면 1/2 이런식으로 나올 수 있게 그리고 오른쪽 버튼 있게하기 */}
      <Photo width={300} height={300} src={likelion} alt="likelion" />
      {/* End of EXPERIENCE 섹션 */}
      <Margin size={100} />
      {/* PROJECT */}
      <S.Divider />
      {/* HappyHouse */}
      <Margin size={50} />
      <Typography size={50} bold color="white">
        <span role="img" aria-label="img">
          💪
        </span>{' '}
        PROJECT
      </Typography>
      <Margin size={60} />
      <Row justify="space-between" align="center">
        <Row align="center">
          <Typography size={30} bold color="white">
            북커버리
          </Typography>
          <S.LogoIcon
            src={bookcoveryLogo}
            alt="bookcoveryLogo"
            onClick={() => window.open('https://bookcovery.com/')}
          />
        </Row>
        <Typography size={20} bold color="blue50">
          2020.12 ~ present
        </Typography>
        <Margin row size={100} />
      </Row>
      <Typography size={20} regular color="blue30">
        웹 서비스 프론트엔드 개발 (React ,Typescript)
      </Typography>
      <Margin size={30} />
      <Typography size={16} medium color="white">
        도서 기반 SNS BookCovery의 데스크톱 웹 개발, 런칭 및 유지보수
        <br />
      </Typography>
      <Margin size={15} />
      <Typography size={16} regular color="blue30">
        주요 업무 내용
      </Typography>
      <Typography size={16} regular color="white">
        - ReactJS, Typescript 웹 어플리케이션 제작 <br />
        - 도움됐어요, 읽고싶어요, 해시태그 기능 구현 <br />
        - 기술스택: ReactJS, Typescript, Storybook, SWR, Recoil,
        Styled-component, Git-flow
        <br />
      </Typography>
      <Margin size={30} />
      <Typography size={16} regular color="blue50">
        * 이미지를 클릭하시면, 크게 보실 수 있습니다.
      </Typography>
      <Margin size={30} />
      <S.Photos>
        <Photo width={360} height={200} src={bookcovery} alt="bookcovery" />
        <Margin row size={30} />
        <Photo
          width={360}
          height={200}
          src={bookcoveryKeyword}
          alt="bookcovery"
        />
        <Margin row size={30} />
        <Photo
          width={360}
          height={200}
          src={bookcoveryKeywordModal}
          alt="bookcoveryKeywordModal"
        />
      </S.Photos>
      {/* End of PROJECT 섹션 */}
      <Margin size={100} />
      {/* 하나의 섹션 */}
      <S.Divider />
      <Margin size={50} />
      <Typography size={50} bold color="white">
        <span role="img" aria-label="img">
          💡
        </span>{' '}
        SKILLS
      </Typography>
      <Margin size={60} />
      <Typography size={30} bold color="blue50">
        PROGRAMMING LANGUAGES
      </Typography>
      <Margin size={10} />
      <Typography size={20} bold color="white">
        HTML, CSS, Javascript
      </Typography>
      <Typography size={20} bold color="white">
        Java
      </Typography>
      <Margin size={60} />
      <Typography size={30} bold color="blue50">
        FRONT-END
      </Typography>
      <Margin size={10} />
      <Typography size={20} bold color="white">
        React, Typescript
      </Typography>
      <Typography size={20} bold color="white">
        React-query, Redux,
      </Typography>
      <Typography size={20} bold color="white">
        Styled-Component, Storybook
      </Typography>
      <Margin size={60} />
      <Typography size={30} bold color="blue50">
        Tools
      </Typography>
      <Margin size={10} />
      <Typography size={20} bold color="white">
        Git, Git-flow, Figma, Jira, Notion, Slack
      </Typography>
      <Margin size={60} />
      <Typography size={30} bold color="blue50">
        Others
      </Typography>
      <Margin size={10} />
      <Typography size={20} bold color="white">
        OPIC IH Level
      </Typography>
      <Typography size={20} bold color="white">
        JLPT (일본어 능력 시험) N1
      </Typography>
      <Margin size={100} />
      <Typography size={25} bold color="white">
        한양대학교 관광학부
      </Typography>
      <Margin size={5} />
      <Typography size={18} bold color="white">
        HANYANG UNIVERSITY
      </Typography>
      <Margin size={20} />
      <Typography size={20} bold color="blue30">
        2014 ~ 2020
      </Typography>
      <Margin size={30} />
      {/* Todo: 이미지 넣기, 이미지 호버하면 애미네미션과 함께 커지기, 클릭하면 창나오고 크게 보기 */}
      {/* End of 섹션 */}
    </S.Container>
  );
};
