import React from 'react';

function OptionMenu(props) {
  return (
    <div className="optionMenu">
      <div className="ui-theme-settings">
        <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
          <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
        </button>
        <div className="theme-settings__inner">
          <div className="scrollbar-container">
            <div className="theme-settings__options-wrapper">
              <h3 className="themeoptions-heading">Layout Options
              </h3>
              <div className="themeoptions-content">
                Content Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionMenu;