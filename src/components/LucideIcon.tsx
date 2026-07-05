import {
  Plane,
  Award,
  DollarSign,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  FolderKanban,
  MessageSquareText,
  Percent,
  Milestone,
  Search,
  Network,
  UserCheck,
  Briefcase,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Download,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FileText,
  Code,
  Cpu,
  Globe,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ExternalLink,
  Upload,
  Maximize2,
  Linkedin,
  Target
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  switch (name) {
    case 'PlaneTakeoff':
    case 'Plane':
      return <Plane className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'DollarSign':
      return <DollarSign className={className} size={size} />;
    case 'TrendingUp':
      return <TrendingUp className={className} size={size} />;
    case 'GraduationCap':
      return <GraduationCap className={className} size={size} />;
    case 'CheckCircle':
      return <CheckCircle className={className} size={size} />;
    case 'FolderKanban':
      return <FolderKanban className={className} size={size} />;
    case 'MessageSquareText':
      return <MessageSquareText className={className} size={size} />;
    case 'BadgePercent':
      return <Percent className={className} size={size} />;
    case 'Milestone':
      return <Milestone className={className} size={size} />;
    case 'SearchCode':
    case 'Search':
      return <Search className={className} size={size} />;
    case 'Network':
      return <Network className={className} size={size} />;
    case 'UserCheck':
      return <UserCheck className={className} size={size} />;
    case 'Briefcase':
      return <Briefcase className={className} size={size} />;
    case 'MapPin':
      return <MapPin className={className} size={size} />;
    case 'Calendar':
      return <Calendar className={className} size={size} />;
    case 'Mail':
      return <Mail className={className} size={size} />;
    case 'Phone':
      return <Phone className={className} size={size} />;
    case 'Download':
      return <Download className={className} size={size} />;
    case 'Play':
      return <Play className={className} size={size} />;
    case 'Pause':
      return <Pause className={className} size={size} />;
    case 'RotateCcw':
      return <RotateCcw className={className} size={size} />;
    case 'Volume2':
      return <Volume2 className={className} size={size} />;
    case 'VolumeX':
      return <VolumeX className={className} size={size} />;
    case 'FileText':
      return <FileText className={className} size={size} />;
    case 'Code':
      return <Code className={className} size={size} />;
    case 'Cpu':
      return <Cpu className={className} size={size} />;
    case 'Globe':
      return <Globe className={className} size={size} />;
    case 'ChevronRight':
      return <ChevronRight className={className} size={size} />;
    case 'ChevronLeft':
      return <ChevronLeft className={className} size={size} />;
    case 'Sparkles':
      return <Sparkles className={className} size={size} />;
    case 'ExternalLink':
      return <ExternalLink className={className} size={size} />;
    case 'Upload':
      return <Upload className={className} size={size} />;
    case 'Maximize2':
      return <Maximize2 className={className} size={size} />;
    case 'Linkedin':
    case 'LinkedIn':
      return <Linkedin className={className} size={size} />;
    case 'Target':
      return <Target className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
}
