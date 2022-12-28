import {useState} from "react";
import BackBtnFilled from "../../../atoms/BackBtnFilled";
import ProgressBar from "../../../atoms/ProgressBar";
import Tab from "../../../molecules/Tab/Tabs";
import DashboardLayout from "../../../templates/DashboardLayout";
import FileDownloadIcon from "../../../atoms/vectors/FileDownloadIcon";
import Accordion from "../../../atoms/Accordion";
import CheckBox from "../../../atoms/forms/CheckBox/index";

function Lessons() {
  const [activetab, setactivetab] = useState(0);
  return (
    <DashboardLayout>
      <div className="dashboard-inner">
        <div className="flex gap-4 mb-4 flex-col md:flex-row  items-start md:items-center">
          <BackBtnFilled className="bg-cvCharcoal10" />
          <h3 className="text-2xl font-medium">
            UX Fundamentals & Design Research
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="flex-grow">
            <div className="w-full relative mb-6 overflow-hidden rounded-xl aspect-video">
              <iframe
                className="absolute inset-0"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/I0-vBdh4sZ8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Tab
              activeTab={activetab}
              setActiveTab={setactivetab}
              tabs={["Lesson Note", "Resources"]}
            />
            <div className="lg:p-8 p-5 w-full font-medium">
              {activetab === 0 && (
                <p>
                  Over the next few videos, we are going to be coding together
                  to make sure what we learn "sticks". I have attached the
                  starter files for you so you can code along with me as we
                  learn CSS. Along the way, you can experiment and try different
                  things on your own as well!
                </p>
              )}
              {activetab === 1 && (
                <>
                  <p>
                    Now that you're an HTML5 wiz, it's time for you to show us
                    what you can do. Have a look at the html files we created
                    throughout the course as reference.
                  </p>
                  <button className="flex text-sm space-x-2 mt-4">
                    <span>1. Attachment.zip</span>
                    <FileDownloadIcon />
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="min-w-[360px] bg-cvCharcoal05 rounded-2xl p-4 sticky top-0 lg:h-screen max-h-screen overflow-y-auto">
            <p className="font-medium">Course Content</p>
            <div className="flex justify-between mt-2 mb-2 text-xs text-cvCharcoal80">
              <span>Your progress</span>
              <span>{Math.round((1 / 10) * 100)}%</span>
            </div>
            <ProgressBar total={10} completed={1} showPercent={false} />

            <div className="my-4 mt-6">
              {Array(5)
                .fill("")
                .map((el, i) => (
                  <Accordion
                    key={`section_${i}`}
                    heading={
                      <div>
                        <p className="font-medium">
                          Section {i + 1} : Introduction
                        </p>
                        <p className="text-xs text-cvCharcoal80">
                          0/4 lessons | 5 mins
                        </p>
                      </div>
                    }
                  >
                    {Array(3)
                      .fill("")
                      .map((el, i) => (
                        <div
                          key={`lesson_${i}`}
                          className={`flex w-full px-4 py-4 border-b ${
                            i === 0 && "bg-[#1CBF7D] text-white"
                          }`}
                        >
                          <CheckBox
                            showLabel={false}
                            name="lesson"
                            options={["lesson"]}
                          />
                          <div>
                            <p className="text-sm font-medium">Lesson Title</p>
                            <p className="text-xs">5 mins</p>
                          </div>
                        </div>
                      ))}
                  </Accordion>
                ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Lessons;
