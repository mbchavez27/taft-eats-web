import ReviewSorts from "~/features/reviews/containers/review-sorts";
import ReviewsList from "~/features/reviews/containers/reviews-list";

export default function EstablishmentReviews({
  onReply,
}: {
  onReply: () => void;
}) {
  return (
    <main className="flex flex-col gap-4">
      <ReviewSorts />
      <ReviewsList onReply={onReply} />
    </main>
  );
}
