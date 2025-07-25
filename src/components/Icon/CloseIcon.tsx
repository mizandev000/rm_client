interface ColorProps {
  Color: string;
}
const CloseIcon = ({ Color }: ColorProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384.2" fill={Color}>
    <path
      d="M379.6,322.9L248.4,191.2l131.5-130c5.4-5.4,5.4-14.2,0-19.6L342.5,4c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4
	L192.1,133.6L61,4.1c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L4.1,41.7c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L4.5,322.9
	c-2.6,2.6-4.1,6.1-4.1,9.8s1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l130.6-131.2L322.8,380
	c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C383.8,329,382.3,325.5,379.6,322.9z"
    />
  </svg>
);
export default CloseIcon;
