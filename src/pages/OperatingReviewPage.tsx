import MainHeader from "../modules/common/components/MainHeader/MainHeader"
import OperatingReviewHeader from "../assets/images/headers/at-a-glance.jpg"

const OperatingReviewPage = () => {
  return (
    <div>
      <MainHeader
        title="Operating Review"
        subtitle=""
        image={OperatingReviewHeader}
      />
    </div>
  )
}

export default OperatingReviewPage