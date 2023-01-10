import React from "react";
import {StyledContainer, EmptyState, Pagination} from "../components";

export default (ListComponent, opts) => {
    return (props) => {
        const {listData} = props;

        return (
            <>
                <StyledContainer>
                    {listData?.length > 0 ? (
                        <ListComponent data={listData}/>
                    ): <EmptyState text={`Data Kosong...`} />}
                </StyledContainer>
            </>
        )
    }
}
