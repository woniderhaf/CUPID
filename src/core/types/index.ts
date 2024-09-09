import {COLORS} from "../../styles/colors";

export type MainLayoutProps = {
    children: React.ReactNode;
    color?: keyof typeof COLORS;
    header?: LayoutHeaderProps | undefined;
};

export type LayoutHeaderProps = {
    title?: string;
    backButtonShow?: boolean;
    rightButtons?: Array<HeaderLayoutButton>;
    onBackPress?: () => any;
};

export type HeaderLayoutButton = {
    icon: string;
    onClick: () => void;
};
