import { useState } from 'react';
import { Card } from '@components';
import { BugCategorySelection } from './BugCategorySelection';
import { BugPrioritySelection } from './BugPrioritySelection';
import { BugReportDetails } from './BugReportDetails';
import type { BugReportForm as BugReportFormType } from './types';
import { platforms } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BugReportForm = () => {
  const [formData, setFormData] = useState<BugReportFormType>({
    title: '',
    description: '',
    category: '',
    priority: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    actualBehavior: '',
    gameVersion: '',
    platform: '',
    attachments: [],
    contactEmail: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof BugReportFormType,
    value: string | File[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Bug report submitted:', formData);
    setIsSubmitting(false);
    // Here you would typically show a success message and redirect
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.category && formData.priority;
      case 2:
        return formData.title && formData.description;
      case 3:
        return (
          formData.stepsToReproduce &&
          formData.expectedBehavior &&
          formData.actualBehavior
        );
      default:
        return true;
    }
  };

  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <Card
        variant="static-feature"
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 sm:gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                    step === currentStep
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : step < currentStep
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-gray-700 border-gray-600 text-gray-400'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-4 sm:w-8 h-1 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Category & Priority */}
          {currentStep === 1 && (
            <div data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">
                What type of bug is it?
              </h2>
              <BugCategorySelection
                selectedCategory={formData.category}
                onCategorySelect={(category) =>
                  handleInputChange('category', category)
                }
              />
              <BugPrioritySelection
                selectedPriority={formData.priority}
                onPrioritySelect={(priority) =>
                  handleInputChange('priority', priority)
                }
              />
            </div>
          )}

          {/* Step 2: Basic Details */}
          {currentStep === 2 && (
            <BugReportDetails
              formData={formData}
              onInputChange={handleInputChange}
            />
          )}

          {/* Step 3: Reproduction Steps */}
          {currentStep === 3 && (
            <div data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">
                How can we reproduce this?
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Steps to Reproduce *
                  </label>
                  <textarea
                    value={formData.stepsToReproduce}
                    onChange={(e) =>
                      handleInputChange('stepsToReproduce', e.target.value)
                    }
                    placeholder="1. Go to...
2. Click on...
3. Observe..."
                    className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Expected Behavior *
                    </label>
                    <textarea
                      value={formData.expectedBehavior}
                      onChange={(e) =>
                        handleInputChange('expectedBehavior', e.target.value)
                      }
                      placeholder="What should have happened?"
                      className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 min-h-[100px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Actual Behavior *
                    </label>
                    <textarea
                      value={formData.actualBehavior}
                      onChange={(e) =>
                        handleInputChange('actualBehavior', e.target.value)
                      }
                      placeholder="What actually happened?"
                      className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Info */}
          {currentStep === 4 && (
            <div data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">
                Additional Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Game Version
                    </label>
                    <input
                      type="text"
                      value={formData.gameVersion}
                      onChange={(e) =>
                        handleInputChange('gameVersion', e.target.value)
                      }
                      placeholder="e.g., 1.4.2"
                      className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Platform *
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) =>
                        handleInputChange('platform', e.target.value)
                      }
                      className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300"
                      required
                    >
                      <option value="">Select your platform</option>
                      {platforms.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      handleInputChange('contactEmail', e.target.value)
                    }
                    placeholder="We'll contact you for updates (optional)"
                    className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Attachments (Screenshots, Logs, Videos)
                  </label>
                  <div className="border-2 border-dashed border-gray-700/30 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                    <FontAwesomeIcon
                      icon="cloud-upload-alt"
                      className="text-gray-500 text-2xl mb-2"
                    />
                    <p className="text-gray-400 text-sm">
                      Drag and drop files here or click to browse
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Max 10MB per file • PNG, JPG, MP4, TXT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700/30">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white font-semibold hover:bg-gray-600/50 hover:border-gray-500/30 transition-all duration-300"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="px-6 py-3 bg-blue-500 border border-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !isStepValid()}
                className="px-6 py-3 bg-green-500 border border-green-500 rounded-xl text-white font-semibold hover:bg-green-600 hover:border-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Bug Report'}
              </button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};
