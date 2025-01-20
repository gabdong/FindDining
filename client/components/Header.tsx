import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import useInput from '@lib/hooks/useInput';

import Input from '@components/Input';
import Button from '@components/Button';
import { useAppSelector } from '../lib/redux/hooks';

export default function Header() {
  const test = useAppSelector((store) => store.modal);

  console.log(test);
  const [searchWord, searchWordHandler] = useInput('');

  return (
    <HeaderSt>
      <HeaderContainerSt>
        <LogoSt />
        <SearchInputWrapSt>
          <Input defaultValue={searchWord} onChange={searchWordHandler} />
          <BsSearch />
        </SearchInputWrapSt>
        <Button text="Login" />
      </HeaderContainerSt>
    </HeaderSt>
  );
}

const HeaderSt = styled.header`
  width: 100%;
  height: var(--header-height);

  background: red;
  backdrop-filter: blur(50px);

  position: sticky;
  left: 0;
  top: 0%;
  z-index: 1;
`;
const HeaderContainerSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background: green;

  position: relative;
`;
const LogoSt = styled.div`
  width: 140px;
  height: 50px;
  background: blue;
`;
const SearchInputWrapSt = styled.div`
  width: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & input {
    width: 100%;
  }

  & svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
