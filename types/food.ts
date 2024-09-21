export type FoodDataProps = {
  src?: string;
  mealTime: Date;
  mealType: "아침" | "아점" | "점심" | "점저" | "저녁" | "간식";
  mealAmount: "가볍게" | "배부르게" | "적당히" | "과하게";
  mealMemo: string;
  feedback?: string;
};
