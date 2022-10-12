import * as Styles from './style';
import { PageTitle, SlideTabs, SubTitle } from 'components';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';
import CategoryModal, { Item } from './CategoryModal';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import axios from 'axios';

import i_clude from 'assets/images/pc/peoplestory/i-cloude.png';
import i_eye from 'assets/images/pc/peoplestory/i-eye.png';
import i_hand from 'assets/images/pc/peoplestory/i-hand.png';
import i_smile from 'assets/images/pc/peoplestory/i-smile.png';
import face_1 from 'assets/images/pc/peoplestory/face1.png';
import face_2 from 'assets/images/pc/peoplestory/face2.png';
import face_3 from 'assets/images/pc/peoplestory/face3.png';
import face_4 from 'assets/images/pc/peoplestory/face4.png';
import face_5 from 'assets/images/pc/peoplestory/face5.png';
import face_6 from 'assets/images/pc/peoplestory/face6.png';

interface InterviewProps {
  type: string;
  bg: string;
  face: string;
  title: string;
  writer: string;
  cont: string;
}
interface WeworkProps {
  category: string;
  itCategory?: number;
  title: string;
  explain: string;
  like: string;
  likelist: Array<string>;
}

const tabsItem = [
  { key: 'IT', label: 'IT' },
  { key: 'solution', label: '컨텐츠/솔루션' },
  { key: 'consulting', label: '컨설팅' },
  { key: 'marketing', label: '영업/마케팅' },
  { key: 'management', label: '경영' },
  { key: 'operate', label: '운영' },
  { key: 'ETC', label: '기타' },
];

const itCategoryItem = [
  { key: 1, label: '서비스기획' },
  { key: 2, label: 'PM(프로젝트매니저)' },
  { key: 3, label: '프로트엔드개발' },
  { key: 4, label: '백엔드개발' },
  { key: 5, label: 'QA' },
  { key: 6, label: '웹퍼블리셔' },
  { key: 7, label: '웹개발' },
  { key: 8, label: '앱개발' },
  { key: 9, label: 'DBA' },
  { key: 10, label: '데이터엔지니어' },
  { key: 11, label: 'Maintenance Design' },
  { key: 12, label: 'Advertising Design' },
  { key: 13, label: 'RPA개발' },
  { key: 14, label: '서버운영' },
  { key: 15, label: '클라우드운영' },
  { key: 16, label: '네트워크운영' },
  { key: 17, label: '정보보호' },
  { key: 18, label: '콘텐츠포팅' },
  { key: 19, label: 'UI/UX Design' },
  { key: 20, label: 'AI R&D' },
];

function PeopleStory() {
  const [radioValue, setRadioValue] = useState(tabsItem[0].key);
  const tabsView = (category: string) => {
    setRadioValue(category);
  };
  // const [result, setResult] = useState();
  // const tabsView = (itCategory: number) => {
  //   setResult(itCategory);
  // };

  const [isOpenModal, isCloseModal] = useState(false);
  const openModal = () => isCloseModal(true);
  const closeModal = () => isCloseModal(false);

  const [selectedCategories, setSelectedCategories] = useState<Item[]>([]);
  const [isSelect, setIsSelect] = useState<Item[]>([]);

  const bg1 = {
    background: '#fae2a8',
  };
  const bg2 = {
    background: '#8ef1c0',
  };
  const bg3 = {
    background: '#ffcda3',
  };
  const bg4 = {
    background: '#dbcdf2',
  };
  const bg5 = {
    background: '#dde8f9',
  };
  const bg6 = {
    background: '#ffb6c9',
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
    });
  }, []);

  const breakpointColumns = {
    default: 2,
    767: 1,
  };

  const [interviewData, setInterviewData] = useState<InterviewProps[]>([]);
  const [weWorkData, setWeWorkData] = useState<WeworkProps[]>([]);
  useEffect(() => {
    axios.get('http://localhost:8080/hunetInterview').then((response) => {
      setInterviewData(response.data);
    });
    axios.get('http://localhost:8080/wework').then((response) => {
      setWeWorkData(response.data);
    });
  }, []);

  return (
    <>
      <div data-aos="fade-down">
        <PageTitle subTitle="휴넷인 이야기" title="휴넷인은 역시" titleRow="다르게 일합니다." />
      </div>
      <div data-aos="fade-up">
        <Styles.OuterWrap className="sub-cont-wrap last-cont">
          <Styles.OuterWrapBg>
            <Styles.OuterWrapInner>
              <h3>휴넷인 인터뷰</h3>
              <Styles.SwiperWrap>
                <Swiper
                  className="interview"
                  slidesPerView={1}
                  observer={true}
                  observeParents={true}
                  observeSlideChildren={true}
                  allowTouchMove={false}
                  navigation={true}
                  pagination={{ type: 'fraction' }}
                  effect={'fade'}
                  modules={[Navigation, Pagination, EffectFade]}
                >
                  <SwiperSlide>
                    <Styles.InterviewQ>
                      <p>
                        <img src={i_clude} />
                      </p>
                      <p>
                        휴넷에 입사 전과 후,
                        <br />
                        생각과 다른 점이 있다면 어떤 것인가요?
                      </p>
                    </Styles.InterviewQ>
                    <Swiper
                      className="interview1"
                      navigation={true}
                      slidesPerView={'auto'}
                      spaceBetween={24}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Navigation, Scrollbar]}
                      breakpoints={{
                        320: {
                          spaceBetween: 24,
                          slidesPerView: 1.1,
                        },
                        768: {
                          spaceBetween: 24,
                          slidesPerView: 'auto',
                        },
                        1024: {
                          spaceBetween: 32,
                          slidesPerView: 'auto',
                        },
                      }}
                    >
                      {interviewData
                        .filter((w) => w.type === 'a')
                        .map((data, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <Styles.InterviewBox style={{ background: data.bg }}>
                                <Styles.InterviewTitle>
                                  <div>
                                    <img src={data.face} />
                                  </div>
                                  <div>
                                    <h4>{data.title}</h4>
                                    <p>{data.writer}</p>
                                  </div>
                                </Styles.InterviewTitle>
                                <Styles.InterviewContents>{data.cont}</Styles.InterviewContents>
                              </Styles.InterviewBox>
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Styles.InterviewQ>
                      <p>
                        <img src={i_eye} />
                      </p>
                      <p>
                        다른 회사와 휴넷의 차이라면
                        <br />
                        어떤 것이 있다고 느끼시나요?
                      </p>
                    </Styles.InterviewQ>
                    <Swiper
                      navigation={true}
                      slidesPerView={'auto'}
                      spaceBetween={32}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Navigation, Scrollbar]}
                      breakpoints={{
                        320: {
                          spaceBetween: 24,
                          slidesPerView: 1.1,
                        },
                        768: {
                          spaceBetween: 24,
                          slidesPerView: 'auto',
                        },
                        1024: {
                          spaceBetween: 32,
                          slidesPerView: 'auto',
                        },
                      }}
                    >
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg1}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_1} />
                            </div>
                            <div>
                              <h4>회사와 저는 조직 안에서 함께 성장하고 있음을 느껴요.</h4>
                              <p>기업교육 영업, KSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            휴넷 입사전에는 회사와 성장과 저의 성장을 분리해서 생각했던 것 같아요.
                            그러나 지금은 조직 안에서 저도 성장하고 있음을 느낍니다. 입사한지 5년이
                            넘은 지금 휴넷은 5년전과 비교할 수 없을 만큼 성장했고, 지금의 저도
                            휴넷에 어울리는 사람이 되기 위해 노력한 결과 부끄럽지 않을 만큼
                            성장했다고 생각해요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg2}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_2} />
                            </div>
                            <div>
                              <h4>원한다면 정말 편하게 다양한 학습이 가능한 곳이에요.</h4>
                              <p>웹개발, KWJ</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            학습하는 분위기가 조성되어 있는 것이 차이라고 생각합니다. 원하는
                            사람들끼리 모여 자유롭게 스터디를 하는 사례가 많으며 지원도 받을 수
                            있고, 팀원들끼리 유익한 컨퍼런스를 공유 하는 등 분위기가 잘 조성되어
                            있어요. 또 매주 있는 혁신아카데미를 통해 외부 유명인사의 강연을 들으면서
                            새로운 인사이트를 얻을 수 있어서, 원한다면 정말 편하게 다양한 학습이
                            가능합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg3}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_3} />
                            </div>
                            <div>
                              <h4>
                                성장하는 과정 속에서 탁월함을 발휘하며 함께 일한다는 사실이 뿌듯하고
                                자랑스러워요.
                              </h4>
                              <p>브랜드커뮤니케이션, JKW</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            Good, better, beyond가 아닌 Arete! 각자 주어진 잠재력을 최대 발휘하는
                            탁월함을 뜻하는 말인데요, 저는 Arete가 휴넷이 지닌 고유하고 특별한
                            특징이자 강점이라고 생각해요. 휴넷의 동료 모두가 좋은 성과나 만족스러운
                            현실에 안주하지 않고, 개인과 회사의 더 높은 성장을 위해 끊임없이 배우고
                            도전합니다. 이렇게 성장하는 과정 속에서 탁월함을 발휘하며 함께 일한다는
                            사실이 뿌듯하고 자랑스러워요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg4}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_4} />
                            </div>
                            <div>
                              <h4>
                                무제한 휴가제, 주 4일제 등 생산성과 직원 복지를 모두 추구하기위해
                                끊임없이 연구하고 실행해요.
                              </h4>
                              <p>사업기획, PCH</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            &lsquo;유연함&rsquo;. 어떤 제도나 형식에 갇혀있지 않고 말랑말랑하게
                            최적의 프로세스를 추구한다는 점이 아닐까 싶습니다. 출퇴근 시간을 개인이
                            자율적으로 정할 수 있거나, 무제한 휴가제, 주 4일제 시행 등 생산성과
                            직원의 복지를 모두 추구할 수 있는 방안을 끊임없이 연구하고 실제로
                            실행하는 점이 가장 큰 특징이라고 생각합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg5}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_5} />
                            </div>
                            <div>
                              <h4>
                                동료들과 적극적으로 의견을 주고받으며 함께 완벽한 결과물을 만들어
                                나가기 위해 노력해요.
                              </h4>
                              <p>온라인 교육운영, NSK</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            다른 동료를 배려하는 문화와, 업무에 대한 CEO 마인드를 가진 동료들이라고
                            생각합니다. 특히 신규입사자들이 이 부분에 대해 많이 느끼고 계시리라
                            생각되는데요, 저 두 가지가 합쳐져 자신의 업무에 대해 누가 시키지 않아도
                            책임감을 가지고 주도적으로 임하고, 업무 협업 시에는 경험과 경력의
                            부족으로 놓치는 부분에 대해 서로 적극적으로 의견을 주고 함께 완벽한
                            결과물을 만들어 나가기 위해 노력합니다. 어떻게 보면 &lsquo;회사에서
                            동료끼리 배려하고 책임감을 가지고 일하는 것은 당연하다&rsquo;고 생각할
                            수도 있는 부분이겠지만 휴넷은 다릅니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg6}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_6} />
                            </div>
                            <div>
                              <h4>
                                업무를 하면서 결정권과 책임을 주기때문에 담당자로써 성과와 보람을
                                느낄 수 있어요.
                              </h4>
                              <p>IT서비스 기획, LSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            업무에 대한 자율성과 책임감을 부여하는 점입니다. 업무를 강제적으로
                            내리거나 시키는 것이 아니라 서로 협의하여 업무를 진행하고, 그 업무를
                            수행함에 있어서 결정권과 책임을 주기때문에 담당자로써 성과와 보람을 느낄
                            수 있습니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg1}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_1} />
                            </div>
                            <div>
                              <h4>수평적인 문화가 어느 복지보다 소중하게 다가와요.</h4>
                              <p>기업교육 영업, KSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            수평적인 문화가 아닐까 싶어요. 팀장님은 팀원이 불편한 점에 가장 먼저
                            귀기울여 주시고, 사장님께서도 신규 아이디어에 대한 사원들의 의견을 열린
                            마음으로 받아주셔서 재미있게 일하고 있습니다. 예전에는 이런 문화를 너무
                            당연하게 여겼는데, 회사생활을 하면 할 수록 어느 복지보다 소중하게
                            다가오는 것 같아요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                    </Swiper>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Styles.InterviewQ>
                      <p>
                        <img src={i_hand} />
                      </p>
                      <p>
                        어떤 분들에게 &lsquo;휴넷&rsquo;을
                        <br />
                        추천해 주고 싶으신가요?
                      </p>
                    </Styles.InterviewQ>
                    <Swiper
                      navigation={true}
                      slidesPerView={'auto'}
                      spaceBetween={32}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Navigation, Scrollbar]}
                      breakpoints={{
                        320: {
                          spaceBetween: 24,
                          slidesPerView: 1.1,
                        },
                        768: {
                          spaceBetween: 24,
                          slidesPerView: 'auto',
                        },
                        1024: {
                          spaceBetween: 32,
                          slidesPerView: 'auto',
                        },
                      }}
                    >
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg3}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_3} />
                            </div>
                            <div>
                              <h4>
                                사람을 바꾸고 세상을 바꾸는 일에 동참하는 데 가슴이 뛰는 분들이
                                계시다면, 꼭 추천하고 싶어요.
                              </h4>
                              <p>브랜드커뮤니케이션, JKW</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            휴넷은 기업교육, 자격증 등의 교육뿐만 아니라, 개인의 성장을 위한 다양한
                            플랫폼을 운영하고 있어요. 한정된 분야가 아니라 생각보다 역동적이에요.
                            사람을 바꾸고 세상을 바꾸는 일에 동참하는 데 가슴이 뛰는 분들이
                            계시다면, 꼭 추천하고 싶어요. 나 뿐만 아니라 모두의 성장에 관심이 많고
                            도전과 변화를 즐기는 분들께 휴넷을 추천합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg4}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_4} />
                            </div>
                            <div>
                              <h4>자리이타의 마음가짐이 확고하신 분에게 휴넷을 추천하고 싶어요.</h4>
                              <p>사업기획, PCH</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            자리이타(항상 남을 먼저 이롭게 하는 정신)의 마음가짐이 확고하신 분에게
                            휴넷을 추천하고 싶습니다. 휴넷은 담대한 목표를 자기주도적으로 설정하고
                            치열하게 그 목표를 달성해가는 곳입니다. 하지만 내/외부 이해관계자들의
                            도움없이는 그런 목표를 세우는 것도, 달성하는 것도 쉽지 않습니다. 동료,
                            고객들과의 관계를 중요하게 생각하고 자리이타 정신을 실천해야만 담대한
                            여정의 원동력을 얻을 수 있다고 생각합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg5}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_5} />
                            </div>
                            <div>
                              <h4>자기개발에 관심이 많은 분들이라면 적극적으로 휴넷을 추천해요.</h4>
                              <p>온라인 교육운영, NSK</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            에듀테크와 HRD업계를 선도하며 자기개발에도 관심이 많은 분들께 휴넷을
                            적극 추천 드립니다. 실제로 휴넷에서는 여러 제도를 통해 임직원들의 성장을
                            돕고 있는데요, 업무시간 중에 진행하는 토픽별 학습 조직(필드앤포럼)을
                            통해 업무 전문성을 쌓을 수 있습니다. 또 월 1회 정기 면담을 포함한 상시
                            면담 제도(111미팅)에서 피드백을 통해 자신의 직무 성장 방향, 계획에 대해
                            원하는 때 언제든 코칭 받을 수 있어요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg6}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_6} />
                            </div>
                            <div>
                              <h4>회사와 본인 모두 성장하기를 원하는 사람에게 추천해요.</h4>
                              <p>IT서비스 기획, LSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            휴넷은 매년 계속 발전하고 새로운 것을 추구하는 회사라고 생각합니다. 단지
                            교육회사가 아닌, 이제 플랫폼 회사, 에듀테크 회사로써 단순히 일을
                            한다기보다 새로운 것, 트렌드를 지속적으로 추구하는 분, 회사와 본인 모두
                            성장하기를 원하는 사람들에게 추천해 드리고 싶습니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg1}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_1} />
                            </div>
                            <div>
                              <h4>
                                학습에 대한 열정과 새로운 사업에 대한 도전을 주저하지 않는 분들께
                                추천해요.
                              </h4>
                              <p>기업교육 영업, KSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            휴넷은 학습에 대한 열정이 있고, 새로운 사업에 대한 도전을 주저하지 않는
                            분들께 추천하고 싶어요. 그리고 그 노력에 대한 성과와 보상은 분명히 드릴
                            수 있는 회사라고 말씀드리고 싶어요. 코로나 시국에 모든 게 불확실한
                            상황에서, 비대면 온라인 컨텐츠가 주 사업인 휴넷이야말로 입사를 고민할
                            필요 없는 회사 아닐까요?
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg2}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_2} />
                            </div>
                            <div>
                              <h4>많이 배우고 싶고, 빠르게 성장하고 싶은 분들께 추천드립니다.</h4>
                              <p>웹개발, KWJ</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            일에 대한 적극적인 참여 의사(ex주어진 프로젝트 관련, 스스로 학습 및
                            분석하는 등 관심)만 보여주신다면 경력이 적더라도 충분히 의견을 낼 수
                            있으며, 원한다면 해당 프로젝트의 메인 역할도 맡을 수 있습니다. 이런
                            과정을 통해서 자신의 의지에 따라 더 빠르게 성장이 가능합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                    </Swiper>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Styles.InterviewQ>
                      <p>
                        <img src={i_smile} />
                      </p>
                      <p>
                        회사 생활에서 <br />
                        행복을 느끼신 때는 언제인가요?
                      </p>
                    </Styles.InterviewQ>
                    <Swiper
                      navigation={true}
                      slidesPerView={'auto'}
                      spaceBetween={32}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Navigation, Scrollbar]}
                      breakpoints={{
                        320: {
                          spaceBetween: 24,
                          slidesPerView: 1.1,
                        },
                        768: {
                          spaceBetween: 24,
                          slidesPerView: 'auto',
                        },
                        1024: {
                          spaceBetween: 32,
                          slidesPerView: 'auto',
                        },
                      }}
                    >
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg4}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_4} />
                            </div>
                            <div>
                              <h4>
                                저는 회사 생활에서 상상했던 것이 현실이 될 때가 가장 행복합니다.
                              </h4>
                              <p>사업기획, PCH</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            예전에는 한 번도 해보지 않은 사업을 기획해서 실행했을 때나, 한 번도
                            통과되지 않았던 제안이 통과되었을 때처럼, 상상만 하던 일들을 치열하게
                            고민해서 기획하고 열정적으로 수행해서 성과를 낼 때 행복을 느낍니다. 또
                            프로젝트의 담당자로서, 성과 뿐 아니라 함께 하는 사람들과의 교감과
                            고객들의 좋은 피드백은 회사생활에서만 얻을 수 있는 행복이라고
                            생각합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg5}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_5} />
                            </div>
                            <div>
                              <h4>
                                새로운 프로젝트를 진행하면서 한 단계씩 완성도가 올라가는 걸 볼 때
                                말로 다 표현할 수 없는 성취감을 느끼고 있어요.
                              </h4>
                              <p>온라인 교육운영, NSK</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            프로젝트의 성공을 위해 물론 많은 어려움과 노력이 따르지만, 실패를
                            장려하는 문화와 동료들의 인정, 격려가 든든한 힘이 됩니다. 물론 모든
                            프로젝트가 성공적으로 끝날 수는 없지만, 누구에게도 부끄럽지 않을 정도로
                            노력했다면 설령 결과는 좋지 않더라도 그 과정을 통해 얻는 것이 있으리라고
                            믿고 격려받았던 경험이 있어서 항상 두려움 없이 새 프로젝트에 임할 수
                            있었던 것 같아요. 이런 과정 속에서 성장하는 스스로를 확인하는 재미와
                            행복이 있는 것 같습니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg6}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_6} />
                            </div>
                            <div>
                              <h4>업무를 하면서 평범한 일상 속에서 항상 행복을 느껴요.</h4>
                              <p>IT서비스 기획, LSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            출근할 때 반갑게 맞아주는 동료, 업무를 할 때 함께 생각해 주고 고민을
                            해결해 주는 분위기, 퇴근할 때 그 날의 업무를 마무리 했다는 보람...
                            회사에서 이런 평범한 일상 중 항상 행복을 느끼고 있습니다. 이것도 쉬운
                            일은 아닌 것 같아요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg1}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_1} />
                            </div>
                            <div>
                              <h4>동료들과 함께 일하고 그 결과가 만족스러울 때 가장 행복하죠.</h4>
                              <p>기업교육 영업, KSY</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            상투적인 얘기 같지만 회사생활하면서 같이 일하는 직원만큼 중요한 건 없는
                            것 같아요. 좋은 인재가 많이 합류해서, 지금 계시는 직원분들은 모두가 너무
                            열정적인 A급 인재입니다. 이런 분들과 함께 일할 수 있어 정말 행복합니다.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg2}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_2} />
                            </div>
                            <div>
                              <h4>복잡한 이슈를 해결했을 때 행복해요.</h4>
                              <p>웹개발, KWJ</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            어려운 이슈가 발생해서 혼자 처리가 어려우면, 동료들과 함께 고민합니다.
                            좋은 동료들이 없었다면 해결이 어려웠을 텐데, 결국 시원하게 이슈를
                            해결하고 나면 동료들에 대한 감사와 결국 해결했다는 뿌듯함이 밀려와요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Styles.InterviewBox style={bg3}>
                          <Styles.InterviewTitle>
                            <div>
                              <img src={face_3} />
                            </div>
                            <div>
                              <h4>
                                동료들과 즐겁고 자유로운 분위기에서 티키타카가 잘 될 때 행복감을
                                느껴요.
                              </h4>
                              <p>브랜드커뮤니케이션, JKW</p>
                            </div>
                          </Styles.InterviewTitle>
                          <Styles.InterviewContents>
                            사내에서 ARROW라는 시스템을 통해 서로의 업무와 목표를 공유하고 감사한
                            마음도 전달할 수 있는데요, 이런 활발한 소통이 좋습니다. 많은 동료들과
                            즐겁고 자유로운 분위기에서 다양한 아이디어를 쌓아가며 티키타카가 잘 될
                            때! 정말 행복한 것 같아요.
                          </Styles.InterviewContents>
                        </Styles.InterviewBox>
                      </SwiperSlide>
                    </Swiper>
                  </SwiperSlide>
                </Swiper>
              </Styles.SwiperWrap>
            </Styles.OuterWrapInner>
          </Styles.OuterWrapBg>
        </Styles.OuterWrap>
      </div>
      <div data-aos="fade-up">
        <div className="sub-cont-wrap last-cont">
          <SubTitle title="우리가 하는 일" />
          <Styles.WeWork>
            <SlideTabs items={tabsItem} setClickView={tabsView} />
            {radioValue === tabsItem[0].key && (
              <>
                <Styles.CategoryBtn variant="light" onClick={openModal}>
                  {isSelect.length > 0 ? (
                    isSelect.length > 1 ? (
                      <span>
                        {isSelect[0].label}{' '}
                        <span className="labelCount">{`외 ${isSelect.length - 1}`}</span>
                      </span>
                    ) : (
                      <span>{isSelect[0].label}</span>
                    )
                  ) : (
                    '궁금한 분야를 선택해 주세요'
                  )}
                </Styles.CategoryBtn>
                <CategoryModal
                  isShow={isOpenModal}
                  onClose={closeModal}
                  items={itCategoryItem}
                  selectedCategories={selectedCategories}
                  onSelect={setSelectedCategories}
                  onComplete={() => {
                    setIsSelect([...selectedCategories]);
                  }}
                />
              </>
            )}

            <Styles.WorkDetail>
              <Masonry
                breakpointCols={breakpointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {radioValue === tabsItem[0].key
                  ? weWorkData
                      .filter((w) => w.category === radioValue && w.itCategory === 1)
                      .map((data, index) => {
                        return (
                          <Styles.DetailItem data-aos="fade-up" key={index}>
                            <h4>{data.title}</h4>
                            <p>{data.explain}</p>
                            <Styles.Like>
                              <h4>👍 이런 분이 오면 좋아요!</h4>
                              <ul>
                                {data.likelist.map((data, index) => {
                                  return <li key={index}>{data}</li>;
                                })}
                              </ul>
                            </Styles.Like>
                          </Styles.DetailItem>
                        );
                      })
                  : weWorkData
                      .filter((w) => w.category === radioValue)
                      .map((data, index) => {
                        return (
                          <Styles.DetailItem data-aos="fade-up" key={index}>
                            <h4>{data.title}</h4>
                            <p>{data.explain}</p>
                            <Styles.Like>
                              <h4>👍 이런 분이 오면 좋아요!</h4>
                              <ul>
                                {data.likelist.map((data, index) => {
                                  return <li key={index}>{data}</li>;
                                })}
                              </ul>
                            </Styles.Like>
                          </Styles.DetailItem>
                        );
                      })}
              </Masonry>
            </Styles.WorkDetail>

            <Styles.EmploymentBtn>
              <Link to="/">채용 공고 보기 &gt;</Link>
            </Styles.EmploymentBtn>
          </Styles.WeWork>
        </div>
      </div>
    </>
  );
}

export default PeopleStory;
