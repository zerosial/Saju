import { useStore } from "../store/useStore";

export default function SajuTable() {
  const { sajuData } = useStore();

  // 이미지와 동일한 데이터
  const data = [
    ["十星", "傷官(상관)", "比肩(비견)", "傷官(상관)", "傷官(상관)"],
    ["天干(천간)", "壬\n(임수)", "丁\n(정화)", "癸\n(계수)", "癸\n(계수)"],
    ["地支(지지)", "寅\n(인목)", "巳\n(사화)", "亥\n(해수)", "酉\n(유금)"],
    ["十星", "比肩(비견)", "劫財(겁재)", "食神(식신)", "偏財(편재)"],
    ["十二運星(십이운성)", "死(사)", "帝旺(제왕)", "胎(태)", "長生(장생)"],
    [
      "十二神殺(십이신살)",
      "劫殺(겁살)",
      "劫殺(겁살)",
      "驛馬殺(역마살)",
      "將星殺(장성살)",
    ],
    [
      "貴人(귀인)",
      "(없음)",
      "(없음)",
      "天乙(천을귀인)",
      "太極(태극귀인)\n文昌(문창귀인)",
    ],
  ];
  const headers = ["", "時", "日", "月", "年"];

  return (
    <div className="w-[85%] mx-auto">
      <div className="text-center font-semibold mb-2 text-black">
        {sajuData.name}님의 사주
      </div>
      <div className="text-center text-sm mb-4 text-black">
        {sajuData.year}년 {sajuData.month}월 {sajuData.day}일 {sajuData.time}
      </div>
      <table
        className="w-full text-center text-xs border-separate border-spacing-0"
        style={{ background: "transparent" }}
      >
        <thead>
          <tr>
            {headers.map((h, idx) => (
              <th
                key={h + idx}
                className="border border-black px-2 py-1 text-black bg-transparent whitespace-pre-line"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-black px-2 py-1 text-black bg-transparent whitespace-pre-line"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
