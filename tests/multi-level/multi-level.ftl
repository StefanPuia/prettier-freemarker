    <#assign someOtherVariable    =3/>
  <#if context.variable == "some string" &&
        someOtherVariable lte fooBar
    >
      <#assign fooBar    =3/>
</#if><#if context.variable == "some string" &&
        someOtherVariable lte fooBar
    >
      <#assign fooBar    =3/>
</#if>