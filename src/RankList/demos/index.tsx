import React from 'react';
import { RankList } from 'myFieldPro'; // 必须和项目名一致

function RankListDemo() {
  const data = Array.from(new Array(10)).map((_, idx) => ({
    label: `选项${idx + 1}`,
    value: 10 - idx,
  }));

  return (
    <div>
      <RankList data={data}></RankList>
    </div>
  );
}

export default RankListDemo;