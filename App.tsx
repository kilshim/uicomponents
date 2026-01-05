import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Tabs } from './components/Tabs';
import { Select } from './components/Select';
import { RadioGroup } from './components/RadioGroup';
import { Checkbox } from './components/Checkbox';
import { Toggle } from './components/Toggle';
import { Slider } from './components/Slider';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { Spinner } from './components/Spinner';
import { ProgressBar } from './components/ProgressBar';
import { Tooltip } from './components/Tooltip';
import { Modal } from './components/Modal';
import { Popover } from './components/Popover';
import { Info, CheckCircle, AlertTriangle, XCircle, Heart, Star, Sun, ArrowLeft } from './components/Icons';

// Helper component for Demo pages
const DemoContainer: React.FC<{ title: string; children: React.ReactNode; onBack: () => void }> = ({ title, children, onBack }) => (
  <div className="max-w-4xl mx-auto">
    <Button variant="outline" onClick={onBack} className="mb-8 group">
      <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
      갤러리로 돌아가기
    </Button>
    <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h2>
    <p className="text-slate-500 dark:text-slate-400 mb-8">컴포넌트의 실제 사용 예시입니다.</p>
    <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 p-6 sm:p-8">
      {children}
    </div>
  </div>
);

// --- Demo Components ---

const ButtonDemo = () => {
    const [story, setStory] = useState('당신은 갈림길에 서 있습니다. 어느 길로 가시겠습니까?');
    return (
        <div>
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">{story}</p>
            <div className="flex flex-wrap gap-4">
                <Button onClick={() => setStory('용기의 길을 선택했습니다. 보물 상자를 발견했습니다!')}>
                    <Star className="w-5 h-5 mr-2" />
                    용기의 길
                </Button>
                <Button variant="secondary" onClick={() => setStory('신중의 길을 선택했습니다. 안전하게 집으로 돌아왔습니다.')}>신중의 길</Button>
            </div>
        </div>
    );
};

const InputDemo = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | undefined>(undefined);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(false);
        if (!email) {
            setError('이메일은 필수 항목입니다.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('유효한 이메일 주소를 입력해주세요.');
        } else {
            setError(undefined);
            setSubmitted(true);
        }
    };
    
    return (
        <div className="space-y-4 max-w-sm">
            <h3 className="text-lg font-bold">뉴스레터 구독하기</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">최신 소식을 가장 먼저 받아보세요.</p>
            <Input 
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(undefined);
                  setSubmitted(false);
                }}
                error={error}
                aria-label="이메일 입력"
            />
            <Button onClick={handleSubmit} className="w-full">구독</Button>
            {submitted && <Alert variant="success" message="구독해주셔서 감사합니다!" />}
        </div>
    );
}

const ProductPageDemo = () => {
  const productTabs = [
    {
      label: '설명',
      icon: <Info className="w-5 h-5 mr-2" />,
      content: (
        <div className="space-y-2 text-slate-600 dark:text-slate-300">
          <p>이 제품은 탁월함과 내구성을 위해 설계된 고품질 제품입니다. 어떤 환경에도 완벽하게 어울리는 세련되고 현대적인 디자인이 특징입니다.</p>
          <p>최고급 소재로 제작되어 오래 지속되는 성능을 보장합니다. 전문가용 및 개인용으로 모두 이상적입니다.</p>
        </div>
      )
    },
    {
      label: '사양',
      icon: <CheckCircle className="w-5 h-5 mr-2" />,
      content: (
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
          <li>크기: 10cm x 5cm x 2cm</li>
          <li>무게: 250g</li>
          <li>소재: 아노다이즈드 알루미늄</li>
          <li>전원: USB-C</li>
        </ul>
      )
    },
    {
      label: '리뷰',
      icon: <Star className="w-5 h-5 mr-2" />,
      content: (
        <div className="space-y-4">
          <div className="border-b pb-2 border-slate-200 dark:border-slate-700">
            <p className="font-bold">정말 멋진 제품이에요!</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">★★★★★ - Alex 작성</p>
          </div>
          <div>
            <p className="font-bold">가성비가 좋아요.</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">★★★★☆ - Maria 작성</p>
          </div>
        </div>
      )
    }
  ];
  return <Tabs items={productTabs} />;
};

const ControlsDemo = () => {
    const selectOptions = [
        { label: "영어", value: "en"},
        { label: "한국어", value: "ko"},
        { label: "日本語", value: "ja"},
    ];
    const radioOptions = [
        { label: '라이트 모드', value: 'light' },
        { label: '다크 모드', value: 'dark' },
        { label: '시스템 설정 따름', value: 'system' },
    ];
    const [lang, setLang] = useState('ko');
    const [theme, setTheme] = useState('system');
    const [push, setPush] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
        <div className="space-y-8 divide-y divide-slate-200 dark:divide-slate-700">
            <div className="pt-4 first:pt-0">
                <h3 className="text-lg font-bold mb-1">언어 설정</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">앱에서 사용할 언어를 선택하세요.</p>
                <Select options={selectOptions} value={lang} onChange={e => setLang(e.target.value)} aria-label="언어 선택" />
            </div>
            <div className="pt-8 first:pt-0">
                 <h3 className="text-lg font-bold mb-1">테마 설정</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">앱의 디자인 테마를 선택하세요.</p>
                <RadioGroup name="theme" options={radioOptions} selectedValue={theme} onChange={setTheme} />
            </div>
            <div className="pt-8 first:pt-0 space-y-4">
                 <h3 className="text-lg font-bold">알림 설정</h3>
                 <Toggle label="푸시 알림 받기" enabled={push} onChange={setPush} />
                 <Checkbox label="마케팅 정보 수신에 동의합니다." checked={marketing} onChange={setMarketing} />
            </div>
        </div>
    );
}

const SliderProgressDemo = () => {
  const [progress, setProgress] = useState(30);
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold">미디어 플레이어</h3>
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">재생 중: "리액트 러브 스토리"</p>
        <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-mono">{Math.floor(progress * 1.8)}s</span>
            <ProgressBar progress={progress} />
            <span className="text-xs font-mono">180s</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">재생 위치 조절</label>
        <Slider value={progress} onChange={setProgress} />
      </div>
    </div>
  )
}

const FileUploadDemo = () => {
    const [alert, setAlert] = useState<{variant: 'success' | 'warning' | 'danger', message: string} | null>(null);

    const handleUpload = (type: 'success' | 'warning' | 'danger') => {
        setAlert(null);
        let message = '';
        switch(type) {
            case 'success':
                message = "'document.pdf' 파일이 성공적으로 업로드되었습니다!";
                break;
            case 'warning':
                message = "파일 크기가 5MB를 초과합니다. 처리하는 데 시간이 더 걸릴 수 있습니다.";
                break;
            case 'danger':
                message = "업로드 실패. 지원하지 않는 파일 형식입니다.";
                break;
        }
        setAlert({ variant: type, message });
        setTimeout(() => setAlert(null), 5000);
    }
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                <Button onClick={() => handleUpload('success')}>성공 시뮬레이션</Button>
                <Button variant="secondary" onClick={() => handleUpload('warning')}>경고 시뮬레이션</Button>
                <Button variant="danger" onClick={() => handleUpload('danger')}>실패 시뮬레이션</Button>
            </div>
            {alert && <div className="mt-6 transition-all duration-300"><Alert variant={alert.variant} message={alert.message} /></div>}
        </div>
    );
};

const DataFetchingDemo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [userData, setUserData] = useState<{name: string, email: string} | null>(null);

    const fetchData = () => {
        setIsLoading(true);
        setUserData(null);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 95) return prev;
                return prev + 10;
            });
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
            setUserData({ name: '홍길동', email: 'gildong.hong@example.com' });
            setIsLoading(false);
        }, 2000);
    }

    return (
        <div>
            <Button onClick={fetchData} disabled={isLoading}>
                {isLoading ? '로딩 중...' : '사용자 데이터 가져오기'}
            </Button>
            <div className="mt-6 space-y-4">
                {isLoading && (
                    <div className="flex flex-col items-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Spinner />
                        <p className="mt-4 text-sm font-medium">서버에서 데이터를 가져오는 중...</p>
                        <div className="w-full mt-2">
                           <ProgressBar progress={progress} />
                        </div>
                    </div>
                )}
                {userData && !isLoading && (
                     <Card title="사용자 프로필">
                        <p><strong>이름:</strong> {userData.name}</p>
                        <p><strong>이메일:</strong> {userData.email}</p>
                    </Card>
                )}
            </div>
        </div>
    );
}

const ToolbarDemo = () => {
    return (
        <div className="flex justify-center items-center h-24 p-4 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center gap-2">
                <Tooltip text="문서 저장">
                    <Button variant="ghost" className="!p-3 text-2xl" aria-label="문서 저장">💾</Button>
                </Tooltip>
                 <Tooltip text="다른 사람과 공유">
                    <Button variant="ghost" className="!p-3 text-2xl" aria-label="다른 사람과 공유">📤</Button>
                </Tooltip>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-2"></div>
                <Tooltip text="더 알아보기">
                    <Button variant="ghost" className="!p-3 text-2xl" aria-label="더 알아보기">ℹ️</Button>
                </Tooltip>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedRadio, setSelectedRadio] = useState('option2');
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [textValue, setTextValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);


  const radioOptions = [
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '비활성화된 옵션', value: 'option3', disabled: true },
  ];
  
  const selectOptions = [
    { label: "옵션 A", value: "a"},
    { label: "옵션 B", value: "b"},
    { label: "옵션 C", value: "c"},
  ];

  const tabItems = [
    {
      label: '프로필',
      icon: <Info className="w-5 h-5 mr-2" />,
      content: <p className="text-slate-600 dark:text-slate-300">프로필 탭의 내용입니다. 여기에 사용자 정보, 설정 및 기타 관련 세부 정보를 표시할 수 있습니다.</p>,
    },
    {
      label: '대시보드',
      icon: <CheckCircle className="w-5 h-5 mr-2" />,
      content: <p className="text-slate-600 dark:text-slate-300">대시보드에 오신 것을 환영합니다. 이 영역에서는 계정 활동 및 주요 지표에 대한 개요를 보여줍니다.</p>,
    },
    {
      label: '설정',
      icon: <AlertTriangle className="w-5 h-5 mr-2" />,
      content: <p className="text-slate-600 dark:text-slate-300">계정 설정을 관리합니다. 여기에서 이메일, 비밀번호, 알림 환경설정을 업데이트할 수 있습니다.</p>,
    },
  ];
  
  const handleOpenPopup = () => {
    const popupWindow = window.open('', '_blank', 'width=500,height=350');
    if (popupWindow) {
      popupWindow.document.write(`
        <html>
          <head>
            <title>브라우저 팝업</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 20px; text-align: center; background-color: #f8fafc; }
              h2 { color: #0f172a; }
              p { color: #475569; }
              button { background-color: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
            </style>
          </head>
          <body>
            <h2>이것이 전통적인 브라우저 팝업(Pop-up)입니다.</h2>
            <p>이 창은 원래 페이지 위에 뜨는 '별개의 브라우저 창'입니다.<br/>광고 등에 사용되어 대부분의 브라우저에서 차단되기도 합니다.</p>
            <button onclick="window.close()">창 닫기</button>
          </body>
        </html>
      `);
      popupWindow.document.close();
    } else {
      alert('팝업이 차단되었습니다. 브라우저의 팝업 차단 설정을 확인하고 다시 시도해주세요.');
    }
  };

  const demos: { [key: string]: { title: string; component: React.ReactNode } } = {
      buttons: { title: '버튼 사용 예시: 미니 어드벤처', component: <ButtonDemo /> },
      inputs: { title: '입력 필드 사용 예시: 뉴스레터 구독', component: <InputDemo /> },
      tabs: { title: '탭 사용 예시: 제품 상세 페이지', component: <ProductPageDemo /> },
      controls: { title: '선택 컨트롤 사용 예시: 사용자 설정', component: <ControlsDemo /> },
      slider_progress: { title: '슬라이더 & 진행률 표시줄 예시: 미디어 플레이어', component: <SliderProgressDemo /> },
      alerts: { title: '알림 사용 예시: 파일 업로드 시뮬레이터', component: <FileUploadDemo /> },
      loaders: { title: '로더 사용 예시: 데이터 로딩 시뮬레이터', component: <DataFetchingDemo /> },
      tooltip: { title: '툴팁 사용 예시: 에디터 툴바', component: <ToolbarDemo /> },
      modal_popup: { title: '모달 사용 예시: 계정 삭제', component: <div><p className="mb-4">아래 버튼을 눌러 계정 삭제 확인 모달을 실행하세요.</p><Button variant="danger" onClick={() => setIsModalOpen(true)}>계정 삭제</Button></div> },
      popover: { title: '팝오버 사용 예시: 사용자 프로필', component: <div className="flex justify-center items-center h-24">
         <Popover
            trigger={<img src="https://picsum.photos/id/237/40/40" alt="User avatar" className="rounded-full cursor-pointer"/>}
          >
            <div className="p-4">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">홍길동</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">g.hong@example.com</p>
              <Button variant="outline" className="w-full mt-4 text-xs">로그아웃</Button>
            </div>
          </Popover>
        </div>
      }
  };
  const activeDemoData = activeDemo ? demos[activeDemo] : null;

  if (activeDemoData) {
      return (
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
              <DemoContainer title={activeDemoData.title} onBack={() => setActiveDemo(null)}>
                  {activeDemoData.component}
              </DemoContainer>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="정말로 계정을 삭제하시겠습니까?">
                  <p className="text-slate-600 dark:text-slate-400 my-4">
                    이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
                  </p>
                  <div className="flex justify-end space-x-2">
                      <Button variant="secondary" onClick={() => setIsModalOpen(false)}>취소</Button>
                      <Button variant='danger' onClick={() => { setIsModalOpen(false); alert('계정이 삭제되었습니다.'); }}>삭제 확인</Button>
                  </div>
              </Modal>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary dark:text-primary-400">UI 컴포넌트 쇼케이스</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">React와 Tailwind CSS로 제작된 필수 UI 요소 갤러리입니다.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card title="버튼 (Buttons)" onLaunch={() => setActiveDemo('buttons')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">다양한 스타일과 상태(기본, 보조, 비활성화 등)를 가진 클릭 가능한 요소입니다.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="danger">위험</Button>
              <Button disabled>비활성화</Button>
              <Button>
                <Heart className="w-5 h-5 mr-2"/>
                아이콘 포함
              </Button>
            </div>
          </Card>

          <Card title="입력 필드 (Inputs)" onLaunch={() => setActiveDemo('inputs')}>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">사용자로부터 텍스트 입력을 받기 위한 필드입니다. 오류 상태를 포함합니다.</p>
             <div className="space-y-4">
               <Input placeholder="일반 입력" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
               <Input placeholder="비활성화된 입력" disabled />
               <Input placeholder="오류가 있는 입력" error="이 필드는 필수입니다." />
             </div>
          </Card>

          <Card title="탭 (Tabs)" onLaunch={() => setActiveDemo('tabs')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">콘텐츠를 여러 섹션으로 나누어 사용자가 선택하여 볼 수 있도록 하는 UI입니다.</p>
            <Tabs items={tabItems} />
          </Card>

          <Card title="선택 / 드롭다운 (Select / Dropdown)" onLaunch={() => setActiveDemo('controls')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">여러 옵션 중 하나를 선택할 수 있는 드롭다운 목록입니다.</p>
            <Select options={selectOptions} />
          </Card>
          
          <Card title="라디오 버튼 (Radio Buttons)" onLaunch={() => setActiveDemo('controls')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">여러 옵션 중 단 하나만 선택해야 할 때 사용됩니다.</p>
            <RadioGroup
              name="example"
              options={radioOptions}
              selectedValue={selectedRadio}
              onChange={setSelectedRadio}
            />
          </Card>

          <Card title="체크박스 & 토글 (Checkbox & Toggle)" onLaunch={() => setActiveDemo('controls')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">하나 또는 여러 개의 옵션을 선택하거나, 특정 기능을 켜고 끌 때 사용됩니다.</p>
            <div className="flex flex-col space-y-4">
                <Checkbox label="이용약관에 동의합니다" checked={isChecked} onChange={setIsChecked} />
                <Toggle label="알림 활성화" enabled={isToggled} onChange={setIsToggled} />
            </div>
          </Card>

          <Card title="슬라이더 (Slider)" onLaunch={() => setActiveDemo('slider_progress')}>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">정해진 범위 내에서 값을 조절할 때 사용되는 컨트롤입니다.</p>
            <div className="flex flex-col items-center">
              <Slider value={sliderValue} onChange={setSliderValue} />
              <p className="mt-4 text-lg font-semibold text-primary">{sliderValue}</p>
            </div>
          </Card>
          
          <Card title="알림 (Alerts)" onLaunch={() => setActiveDemo('alerts')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">사용자에게 정보, 성공, 경고, 오류 등 특정 상태를 알려주는 메시지 박스입니다.</p>
            <div className="space-y-4">
              <Alert variant="info" message="이것은 정보성 메시지입니다." />
              <Alert variant="success" message="작업이 성공적으로 완료되었습니다!" />
              <Alert variant="warning" message="입력 내용을 확인해주세요." />
              <Alert variant="danger" message="예상치 못한 오류가 발생했습니다." />
            </div>
          </Card>
          
          <Card title="로더 & 진행률 (Loaders & Progress)" onLaunch={() => setActiveDemo('loaders')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">데이터를 불러오거나 작업이 진행 중임을 시각적으로 보여줍니다.</p>
            <div className="flex flex-col items-center space-y-6">
                <Spinner />
                <ProgressBar progress={sliderValue} />
            </div>
          </Card>

          <Card title="툴팁 (Tooltip)" onLaunch={() => setActiveDemo('tooltip')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">특정 요소에 마우스를 올렸을 때 추가적인 정보를 제공하는 작은 말풍선입니다.</p>
            <div className="flex justify-center items-center h-24">
              <Tooltip text="이것은 유용한 툴팁입니다!">
                <Button variant="outline">마우스를 올려보세요</Button>
              </Tooltip>
            </div>
          </Card>

          <Card title="모달 (Modal) vs 팝업 (Pop-up)" onLaunch={() => setActiveDemo('modal_popup')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4"><b>모달</b>은 배경 상호작용을 막는 창이며, <b>팝업</b>은 별개의 브라우저 창입니다. 둘의 차이를 확인해보세요.</p>
            <div className="flex justify-center items-center h-24 gap-4">
              <Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
              <Button variant="secondary" onClick={handleOpenPopup}>브라우저 팝업 열기</Button>
            </div>
             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="모달(Modal) 창">
                <p className="text-slate-600 dark:text-slate-400 my-4">
                  이 창이 열려있는 동안에는 뒤의 배경 페이지와 상호작용할 수 없습니다. 사용자의 행동을 유도할 때 사용됩니다.
                </p>
                <div className="flex justify-end space-x-2">
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>취소</Button>
                    <Button onClick={() => setIsModalOpen(false)}>확인</Button>
                </div>
             </Modal>
          </Card>
          
          <Card title="팝오버 (Popover)" onLaunch={() => setActiveDemo('popover')}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">특정 요소에 연결되어 추가 정보나 작업을 제공하는 작은 창입니다. 외부를 클릭하면 닫힙니다.</p>
            <div className="flex justify-center items-center h-24">
                <Popover
                  trigger={<Button variant="outline">팝오버 열기</Button>}
                >
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200">팝오버 제목</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      이것은 팝오버의 내용입니다. 간단한 정보를 표시할 수 있습니다.
                    </p>
                  </div>
                </Popover>
            </div>
          </Card>

          <div className="lg:col-span-3 md:col-span-2">
            <Card title="아이콘 (Iconography)">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">의미를 시각적으로 전달하여 사용자 이해를 돕는 아이콘 모음입니다.</p>
              <div className="flex flex-wrap gap-6 text-slate-500 dark:text-slate-400">
                <div className="flex flex-col items-center gap-2"><Info className="w-8 h-8" /><span>정보</span></div>
                <div className="flex flex-col items-center gap-2"><CheckCircle className="w-8 h-8 text-green-500" /><span>성공</span></div>
                <div className="flex flex-col items-center gap-2"><AlertTriangle className="w-8 h-8 text-yellow-500" /><span>경고</span></div>
                <div className="flex flex-col items-center gap-2"><XCircle className="w-8 h-8 text-red-500" /><span>오류</span></div>
                <div className="flex flex-col items-center gap-2"><Heart className="w-8 h-8 text-pink-500" /><span>하트</span></div>
                <div className="flex flex-col items-center gap-2"><Star className="w-8 h-8 text-amber-400" /><span>별</span></div>
                <div className="flex flex-col items-center gap-2"><Sun className="w-8 h-8 text-orange-500" /><span>태양</span></div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;