import React from 'react';

export default ({ pageContext }: any) => {
  console.log(pageContext, 'sadas');
  return (
    <div>
      <div>Hello Dynamic Page from {pageContext.name}</div>
      <div>This page is create dynamically at Build Time</div>
    </div>
  );
};
