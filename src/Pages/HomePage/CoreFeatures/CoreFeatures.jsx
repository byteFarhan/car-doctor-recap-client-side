import SectionIntro from "../SectionIntro/SectionIntro";
import Feature from "./Feature";
import SupportIcon from "../../../assets/icons/person.svg";
// import timelyDelivery from "../../../assets/icons/deliveryt.svg";
import expertTeam from "../../../assets/icons/group.svg";
import gurantyIcon from "../../../assets/icons/check.svg";
import timelyDelivery from "../../../assets/icons/deliveryt.svg";
import timelyDelivery2 from "../../../assets/icons/Group 38729.svg";
import bestEquipment from "../../../assets/icons/Wrench.svg";

const CoreFeatures = () => {
  return (
    <>
      <section id="CoreFeatures" className="my-40">
        <SectionIntro
          sectionCategory="Core Features"
          sectionTitle="Why Choose Us"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {/* <div className="[&>*]:text-white rounded-md bg-primary">
            <Feature
              featureIcon={timelyDelivery2}
              featureName="Timely Delivery"
            />
          </div> */}
          <Feature featureIcon={expertTeam} featureName="Expert Team" />
          <Feature
            featureIcon={timelyDelivery2}
            featureName="Timely Delivery"
          />
          <Feature featureIcon={SupportIcon} featureName="24/7 Support" />
          <Feature featureIcon={bestEquipment} featureName="Best Equipment" />
          <Feature featureIcon={gurantyIcon} featureName="100% Guranty" />
          <Feature featureIcon={timelyDelivery} featureName="Timely delivery" />
        </div>
      </section>
    </>
  );
};

export default CoreFeatures;
