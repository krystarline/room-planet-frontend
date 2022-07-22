import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { useBeforeunload } from "react-beforeunload";

import AppContents from "../AppContents";
import AppFooter from "../AppFooter";
import AppNavBar from "../AppNavBar";
import usePrompt from "../hooks/usePrompt";

function Plan() {
  useBeforeunload((event) => event.preventDefault());

  usePrompt("작업 중인 도면이 저장되지 않습니다, 정말 나가시겠습니까?", true);

  return (
    <Suspense fallback={<Loader barStyles={{ width: 300, height: 25 }} />}>
      <AppNavBar />
      <AppContents />
      <AppFooter />
    </Suspense>
  );
}

export default Plan;
