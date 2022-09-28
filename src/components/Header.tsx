import React from 'react';

type HeaderProps = {
  text: string;
  subtext?: string;
};

const Header = ({ text, subtext }: HeaderProps) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo similique
        maiores dolor eaque tenetur ex nesciunt obcaecati. Nobis veniam sit,
        aliquid totam, adipisci reprehenderit quam nihil quod corporis
        perspiciatis eveniet!
      </p>
      <p>{text}</p>
      <p>{subtext}</p>
    </div>
  );
};

export default Header;
