const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA726" /> {/* Light orange */}
          <stop offset="100%" stopColor="#FF7043" /> {/* Darker orange */}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFCC80" /> {/* Pale orange */}
          <stop offset="100%" stopColor="#FFAB40" /> {/* Vibrant orange */}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFE0B2" /> {/* Very light orange */}
          <stop offset="100%" stopColor="#FF8A65" /> {/* Medium orange */}
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFB74D" /> {/* Light-medium orange */}
          <stop offset="100%" stopColor="#FFA726" /> {/* Light orange */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
