import mrt from '../../../data/mrt.json';
import { lineInfo } from '../../const/lineInfo';
import Dropdown from './Dropdown';
import MenuSelect from './MenuSelect';
import TwoColumnMenuSelect from './TwoColumnMenuSelect';
import { StyledFilter, StyledTabs } from './styles/FilterContent.styles';

const FilterGroups = () => {
  return (
    <StyledFilter>
      <StyledTabs
        value={0}
        variant='scrollable'
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
      >
        <Dropdown selectKey='foodType'>
          <MenuSelect
            selectKey='foodType'
            options={[
              '蛋糕',
              '豆花',
              '冰品飲料',
              '冰淇淋',
              '麵包',
              '餅乾',
              '巧克力',
            ]}
          />
        </Dropdown>

        <Dropdown selectKey='station'>
          <TwoColumnMenuSelect
            leftSelectKey='line'
            rightSelectKey='station'
            leftColumnOptions={lineInfo}
            rightColumnOptions={mrt}
          />
        </Dropdown>

        <Dropdown selectKey='minRating'>
          <MenuSelect
            selectKey='minRating'
            options={['不限', '4.5', '4', '3.5', '3']}
          />
        </Dropdown>

        <Dropdown selectKey='sortBy'>
          <MenuSelect
            selectKey='sortBy'
            options={['相關度', '評分', '評論數']}
          />
        </Dropdown>
      </StyledTabs>
    </StyledFilter>
  );
};

export default FilterGroups;
