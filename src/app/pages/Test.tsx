import { useState } from 'react';
import { Switch } from '@components';
import { Checkbox } from '@components';
import { Radio } from '@components';
import { Card } from '@components';
import { Button } from '@components';

export const Test = () => {
  const [switchStates, setSwitchStates] = useState({
    basic: false,
    withIcons: false,
    disabled: true,
    large: false,
    green: false,
    purple: false,
  });

  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    withIcon: false,
    indeterminate: false,
    disabled: true,
    large: false,
    red: false,
    cyan: false,
  });

  const [radioValue, setRadioValue] = useState('option1');

  const handleSwitchChange = (key: string) => (checked: boolean) => {
    setSwitchStates(prev => ({ ...prev, [key]: checked }));
  };

  const handleCheckboxChange = (key: string) => (checked: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [key]: checked }));
  };

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-orbitron mb-4">
            Comet GameHouse
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beautiful, accessible form components for your gaming platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Switch Components */}
          <Card padding="lg" rounded="xl" shadow="xl" className="bg-gray-800/50">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center">
                <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
                Switch Components
              </h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Switch
                    checked={switchStates.basic}
                    onChange={handleSwitchChange('basic')}
                    label="Basic Switch"
                    color="blue"
                  />
                  <code className="text-blue-300 text-sm mt-2 sm:mt-0">
                    {switchStates.basic ? 'ON' : 'OFF'}
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Switch
                    checked={switchStates.withIcons}
                    onChange={handleSwitchChange('withIcons')}
                    label="With Icons"
                    color="green"
                    icons={{
                      checked: 'bell',
                      unchecked: 'bell-slash'
                    }}
                  />
                  <code className="text-green-300 text-sm mt-2 sm:mt-0">
                    {switchStates.withIcons ? 'NOTIFICATIONS ON' : 'SILENCED'}
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Switch
                    checked={switchStates.large}
                    onChange={handleSwitchChange('large')}
                    label="Large Size"
                    size="lg"
                    color="purple"
                  />
                  <code className="text-purple-300 text-sm mt-2 sm:mt-0">
                    SIZE: LG
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Switch
                    checked={switchStates.disabled}
                    onChange={handleSwitchChange('disabled')}
                    label="Disabled State"
                    disabled
                    color="blue"
                  />
                  <code className="text-gray-400 text-sm mt-2 sm:mt-0">
                    DISABLED
                  </code>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                    <Switch
                      checked={switchStates.green}
                      onChange={handleSwitchChange('green')}
                      color="green"
                    />
                    <p className="text-green-300 text-sm mt-2">Green</p>
                  </div>
                  <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                    <Switch
                      checked={switchStates.purple}
                      onChange={handleSwitchChange('purple')}
                      color="purple"
                    />
                    <p className="text-purple-300 text-sm mt-2">Purple</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Checkbox Components */}
          <Card padding="lg" rounded="xl" shadow="xl" className="bg-gray-800/50">
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center">
                <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
                Checkbox Components
              </h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Checkbox
                    checked={checkboxStates.basic}
                    onChange={handleCheckboxChange('basic')}
                    label="Basic Checkbox"
                    color="green"
                  />
                  <code className="text-green-300 text-sm mt-2 sm:mt-0">
                    {checkboxStates.basic ? 'CHECKED' : 'UNCHECKED'}
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Checkbox
                    checked={checkboxStates.withIcon}
                    onChange={handleCheckboxChange('withIcon')}
                    label="With Star Icon"
                    color="yellow"
                    icon="star"
                  />
                  <code className="text-yellow-300 text-sm mt-2 sm:mt-0">
                    {checkboxStates.withIcon ? 'FAVORITED' : 'UNFAVORITED'}
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Checkbox
                    indeterminate={checkboxStates.indeterminate}
                    onChange={handleCheckboxChange('indeterminate')}
                    label="Indeterminate State"
                    color="blue"
                  />
                  <code className="text-blue-300 text-sm mt-2 sm:mt-0">
                    INDETERMINATE
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Checkbox
                    checked={checkboxStates.large}
                    onChange={handleCheckboxChange('large')}
                    label="Large Size"
                    size="lg"
                    color="cyan"
                  />
                  <code className="text-cyan-300 text-sm mt-2 sm:mt-0">
                    SIZE: LG
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <Checkbox
                    checked={checkboxStates.disabled}
                    onChange={handleCheckboxChange('disabled')}
                    label="Disabled Checkbox"
                    disabled
                    color="green"
                  />
                  <code className="text-gray-400 text-sm mt-2 sm:mt-0">
                    DISABLED
                  </code>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                    <Checkbox
                      checked={checkboxStates.red}
                      onChange={handleCheckboxChange('red')}
                      color="red"
                    />
                    <p className="text-red-300 text-sm mt-2">Red Theme</p>
                  </div>
                  <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                    <Checkbox
                      checked={checkboxStates.cyan}
                      onChange={handleCheckboxChange('cyan')}
                      color="cyan"
                    />
                    <p className="text-cyan-300 text-sm mt-2">Cyan Theme</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Radio Components */}
          <Card padding="lg" rounded="xl" shadow="xl" className="bg-gray-800/50 lg:col-span-2">
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center">
                <span className="w-2 h-6 bg-purple-500 rounded-full mr-3"></span>
                Radio Components
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Game Difficulty</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'easy'}
                        onChange={() => handleRadioChange('easy')}
                        label="Easy Mode"
                        name="difficulty"
                        value="easy"
                        color="green"
                      />
                      <code className="text-green-300 text-sm">
                        {radioValue === 'easy' && 'SELECTED'}
                      </code>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'medium'}
                        onChange={() => handleRadioChange('medium')}
                        label="Medium Mode"
                        name="difficulty"
                        value="medium"
                        color="yellow"
                      />
                      <code className="text-yellow-300 text-sm">
                        {radioValue === 'medium' && 'SELECTED'}
                      </code>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'hard'}
                        onChange={() => handleRadioChange('hard')}
                        label="Hard Mode"
                        name="difficulty"
                        value="hard"
                        color="red"
                      />
                      <code className="text-red-300 text-sm">
                        {radioValue === 'hard' && 'SELECTED'}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Theme Options</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'dark'}
                        onChange={() => handleRadioChange('dark')}
                        label="Dark Theme"
                        name="theme"
                        value="dark"
                        color="blue"
                        icon="moon"
                      />
                      <code className="text-blue-300 text-sm">
                        {radioValue === 'dark' && 'ACTIVE'}
                      </code>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'light'}
                        onChange={() => handleRadioChange('light')}
                        label="Light Theme"
                        name="theme"
                        value="light"
                        color="cyan"
                        icon="sun"
                      />
                      <code className="text-cyan-300 text-sm">
                        {radioValue === 'light' && 'ACTIVE'}
                      </code>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <Radio
                        checked={radioValue === 'auto'}
                        onChange={() => handleRadioChange('auto')}
                        label="Auto Detect"
                        name="theme"
                        value="auto"
                        color="purple"
                        icon="sync"
                      />
                      <code className="text-purple-300 text-sm">
                        {radioValue === 'auto' && 'ACTIVE'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Size Variations */}
              <div className="mt-8 pt-6 border-t border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-4">Size Variations</h3>
                <div className="flex flex-wrap gap-6 items-center justify-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-center">
                    <Radio
                      checked={radioValue === 'small'}
                      onChange={() => handleRadioChange('small')}
                      size="sm"
                      color="blue"
                    />
                    <p className="text-blue-300 text-sm mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <Radio
                      checked={radioValue === 'medium-size'}
                      onChange={() => handleRadioChange('medium-size')}
                      size="md"
                      color="green"
                    />
                    <p className="text-green-300 text-sm mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <Radio
                      checked={radioValue === 'large-size'}
                      onChange={() => handleRadioChange('large-size')}
                      size="lg"
                      color="purple"
                    />
                    <p className="text-purple-300 text-sm mt-2">Large</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Usage Examples */}
          <Card padding="lg" rounded="xl" shadow="xl" className="bg-gray-800/50 lg:col-span-2">
            <div data-aos="zoom-in">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center">
                <span className="w-2 h-6 bg-cyan-500 rounded-full mr-3"></span>
                Real World Examples
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Game Settings */}
                <Card padding="md" rounded="lg" className="bg-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Game Settings</h3>
                  <div className="space-y-4">
                    <Switch
                      checked={switchStates.basic}
                      onChange={handleSwitchChange('basic')}
                      label="Sound Effects"
                      color="blue"
                    />
                    <Switch
                      checked={switchStates.withIcons}
                      onChange={handleSwitchChange('withIcons')}
                      label="Background Music"
                      color="green"
                      icons={{
                        checked: 'music',
                        unchecked: 'volume-mute'
                      }}
                    />
                    <Checkbox
                      checked={checkboxStates.withIcon}
                      onChange={handleCheckboxChange('withIcon')}
                      label="Remember my preferences"
                      color="cyan"
                    />
                  </div>
                </Card>

                {/* Notification Preferences */}
                <Card padding="md" rounded="lg" className="bg-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                  <div className="space-y-4">
                    <Switch
                      checked={switchStates.withIcons}
                      onChange={handleSwitchChange('withIcons')}
                      label="Push Notifications"
                      color="purple"
                      icons={{
                        checked: 'bell',
                        unchecked: 'bell-slash'
                      }}
                    />
                    <Checkbox
                      checked={checkboxStates.basic}
                      onChange={handleCheckboxChange('basic')}
                      label="Email notifications"
                      color="yellow"
                    />
                    <Checkbox
                      checked={checkboxStates.cyan}
                      onChange={handleCheckboxChange('cyan')}
                      label="Tournament alerts"
                      color="red"
                    />
                  </div>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-gray-600">
                <Button
                  onClick={() => {
                    setSwitchStates({
                      basic: true,
                      withIcons: true,
                      disabled: true,
                      large: true,
                      green: true,
                      purple: true,
                    });
                    setCheckboxStates({
                      basic: true,
                      withIcon: true,
                      indeterminate: false,
                      disabled: true,
                      large: true,
                      red: true,
                      cyan: true,
                    });
                    setRadioValue('hard');
                  }}
                  color="blue"
                  size="lg"
                >
                  Select All
                </Button>
                
                <Button
                  onClick={() => {
                    setSwitchStates({
                      basic: false,
                      withIcons: false,
                      disabled: true,
                      large: false,
                      green: false,
                      purple: false,
                    });
                    setCheckboxStates({
                      basic: false,
                      withIcon: false,
                      indeterminate: false,
                      disabled: true,
                      large: false,
                      red: false,
                      cyan: false,
                    });
                    setRadioValue('easy');
                  }}
                  color="gray"
                  size="lg"
                >
                  Reset All
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700" data-aos="fade-up">
          <p className="text-gray-400">
            Comet GameHouse Design System • Built with Tailwind CSS & React
          </p>
        </div>
      </div>
    </div>
  );
};