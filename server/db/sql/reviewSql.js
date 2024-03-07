/*관리자*/

const reviewList = `SELECT 
  r.review_code,
  r.detail_code,
  r.review_title,
  r.review_content,
  r.stars,
  r.review_date,
  r.member_code,
  m.member_id
  FROM review r
  JOIN member m ON r.member_code = m.member_code;`

//페이징 쿼리
const reviewListPage = `SELECT
r.review_code,
  r.detail_code,
  r.review_title,
  r.review_content,
  r.stars,
  r.review_date,
  r.member_code,
  m.member_id
FROM review r
LEFT OUTER JOIN member m ON r.member_code = m.member_code
ORDER BY r.review_date DESC
LIMIT ? OFFSET ?`;

//전체 데이터 개수 페이징.
const reviewListCount = `
SELECT COUNT(*) count
FROM  review `

//게시글 단건조회.
const reviewInfo = `SELECT 
review_code,
review_title,
review_content,
stars
FROM review
WHERE review_code = ?`;

/*회원*/

//상품 상세에서 조회
const detailReview = `SELECT 
  r.review_code,
  r.detail_code,
  r.review_title,
  r.review_content,
  r.stars,
  r.review_date,
  r.member_code,
  m.member_id,
  d.product_code
  FROM review r
  LEFT OUTER JOIN member m ON r.member_code = m.member_code
  JOIN detail d ON r.detail_code = d.detail_code
  WHERE d.product_code = ?`;


//상품 상세에서 조회
const detailReviewPage = `SELECT 
  r.review_code,
  r.detail_code,
  r.review_title,
  r.review_content,
  r.stars,
  r.review_date,
  r.member_code,
  m.member_id,
  d.product_code
  FROM review r
  JOIN member m ON r.member_code = m.member_code
  JOIN detail d ON r.detail_code = d.detail_code
  WHERE d.product_code = ?
  ORDER BY r.review_date DESC
  LIMIT ? OFFSET ?`;

//상품별 데이터 개수 페이징.
const detailReviewCount = `
SELECT COUNT(*) count
FROM  review `

//마이페이지에서 볼 때.
const uReview = `  SELECT review_title,review_date
  FROM review
  WHERE member_code = ?;`
//list에서 클릭시 상세조회 기능.
// const reviewDetail =
//리뷰 insert.
const reviewInsert = `INSERT INTO review
SET review_code = snack.nextval('REV')
, ?`;

//리뷰 delete.
const reviewDelete = `DELETE FROM review WHERE review_code = ?`;


//상품평 개수 쿼리
const reviewCnt =
  `SELECT COUNT(*) count
FROM   review r JOIN detail d
ON     r.detail_code = d.detail_code
WHERE  d.product_code = ?`;

//평균 별점 쿼리
const avgStars =
  `SELECT d.product_code, truncate(AVG(stars),1) avg
FROM   review r JOIN detail d
ON     r.detail_code = d.detail_code
GROUP BY d.product_code
HAVING  d.product_code = ?`;

//이미지.
// reviewImgInsert: `insert into file set board_code = ?`,


module.exports = {
  reviewList,
  reviewInsert,
  detailReview,
  reviewInfo,
  reviewCnt,
  avgStars,
  reviewListPage,
  reviewListCount,
  detailReviewPage
  // reviewDelete,
  // reviewImgInsert,
};
