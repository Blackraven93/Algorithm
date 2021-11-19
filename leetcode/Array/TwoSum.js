// sort method 확인
// 틀림 -> 음수 체크 확인
// 시간 복잡도 줄일려고 이상한 짓을 해버림..
// 이상한 짓을 해서 문제가 복잡해짐..
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// }

// 정말 놀랍다 ;; JS 기본기가 부족하다 map

console.log(twoSum([3, 3], 6));
