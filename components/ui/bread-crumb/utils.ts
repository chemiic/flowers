import {router, RouterType} from "@/utils/router";

export const getBreadcrumb = (pathname: string) => {
  const result: RouterType[] = [];

  const currentURIs: string[] = pathname.split("/").filter(Boolean);

  function find(routes: RouterType[]): void {
    routes.forEach((route): void => {
      const routerURIs: string[] = route.url.split("/").filter(Boolean);

      for (let i = 0; i < routerURIs.length; i++) {
        if (
          routerURIs[i] === currentURIs[i] &&
          !result.find((resultRoute) => resultRoute.url.includes(routerURIs[i]))
        ) {
          result.push(route);
          return;
        }
      }
    });
  }

  find(router);

  return result;
};
